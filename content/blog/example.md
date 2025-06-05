---
title: "Wprowadzenie do Next.js 14"
date: "2024-03-20"
excerpt: "Poznaj najnowsze funkcje i możliwości Next.js 14, w tym Server Components, Streaming SSR i nowy system routingu."
author: "Mateusz"
readTime: "5 min"
category: "Next.js"
tags: ["Next.js", "React", "TypeScript", "Frontend"]
---

# Wprowadzenie do Next.js 14

Next.js 14 wprowadza wiele rewolucyjnych zmian w sposobie budowania aplikacji webowych. W tym artykule przyjrzymy się najważniejszym nowościom i sprawdzimy, jak możemy je wykorzystać w naszych projektach.

## Server Components

Server Components to jedna z najważniejszych nowości w Next.js 14. Pozwalają one na renderowanie komponentów po stronie serwera, co znacząco poprawia wydajność aplikacji i SEO.

```tsx
// app/page.tsx
export default async function Page() {
  const data = await fetchData(); // To wykonuje się na serwerze
  return <div>{data.title}</div>;
}
```

## Streaming SSR

Streaming SSR to kolejna świetna funkcja, która pozwala na stopniowe ładowanie zawartości strony:

```tsx
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <h1>Moja strona</h1>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
```

## Nowy system routingu

Next.js 14 wprowadza też nowy, bardziej intuicyjny system routingu oparty na konwencji app directory:

```
app/
  layout.tsx
  page.tsx
  blog/
    page.tsx
    [slug]/
      page.tsx
```

## Podsumowanie

Next.js 14 to duży krok naprzód w rozwoju frameworka. Nowe funkcje znacząco ułatwiają tworzenie wydajnych i skalowalnych aplikacji webowych. 