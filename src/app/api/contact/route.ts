import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Konfiguracja transportera Nodemailer dla Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD, // Hasło aplikacji z Google Account
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, budget, timeline, message } = body;

    // Walidacja wymaganych pól
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Brakuje wymaganych pól' },
        { status: 400 }
      );
    }

    // Przygotowanie treści emaila
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Ten sam adres - będziesz otrzymywać na swojego Gmaila
      subject: `Nowa wiadomość od ${firstName} ${lastName}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Od:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${phone}</p>` : ''}
        ${service ? `<p><strong>Typ usługi:</strong> ${service}</p>` : ''}
        ${budget ? `<p><strong>Budżet:</strong> ${budget}</p>` : ''}
        ${timeline ? `<p><strong>Termin realizacji:</strong> ${timeline}</p>` : ''}
        <h3>Wiadomość:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Wysłanie emaila
    await transporter.sendMail(mailOptions);

    // Wysłanie potwierdzenia do klienta
    const confirmationMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Dziękujemy za wiadomość',
      html: `
        <h2>Dziękujemy za kontakt!</h2>
        <p>Drogi ${firstName},</p>
        <p>Dziękuję za przesłanie wiadomości. Odpowiem najszybciej jak to możliwe, zazwyczaj w ciągu 24 godzin.</p>
        <p>Pozdrawiam,<br>Mateusz Kulec</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json(
      { message: 'Wiadomość została wysłana pomyślnie' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Błąd wysyłania maila:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
} 