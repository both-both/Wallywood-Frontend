# Wallywood Frontend

Webshop for filmplakater. Brugeren kan browse plakater efter genre, åbne den enkelte
plakat for at se detaljer og lægge plakater i en indkøbskurv.

- Skoleprojekt i Avanceret Frontend
- Data hentes fra mit eget Wallywood API: https://github.com/both-both/DSI-Wallywood

Betaling og ordreafslutning er ikke en del af opgaven.

## Funktioner

- Forside med fire tilfældige plakater
- Plakatoversigt med filtrering på genre
- Detaljeside for den enkelte plakat med pris, mål og beskrivelse
- Indkøbskurv med antal og totalpris, gemt i API'et
- Favoritter gemt i `localStorage`
- Kontakt- og loginformular med validering
- Responsivt design med burgermenu på mobil

## Teknologier

- React 19 med TypeScript
- Vite som build-værktøj
- styled-components til al styling, med tema og globale styles
- React Router til routing
- React Hook Form og Zod til formularer og validering
- React Icons

## Forudsætninger

- Node.js 20 eller nyere
- Wallywood API'et skal køre lokalt på `http://localhost:4000`.
  Følg installationsvejledningen i API-repoet først.

## Miljøvariabler

Kopiér `.env.example` til `.env` i roden af projektet:

```
cp .env.example .env
```

Filen indeholder:

```
VITE_API_URL=http://localhost:4000/
```

Den afsluttende skråstreg skal med. Peger API'et et andet sted hen, rettes værdien her.
Vite læser kun `.env` ved opstart, så genstart dev-serveren efter en ændring.

## Installation

1. Installer dependencies:

   ```
   npm install
   ```

2. Opret `.env`-filen som beskrevet ovenfor.

3. Start API'et i det andet projekt.

4. Start frontenden:

   ```
   npm run dev
   ```

Siden kører nu på `http://localhost:5173`.

## Tilgængelige scripts

| Kommando          | Beskrivelse                                    |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Starter udviklingsserveren med hot reload      |
| `npm run build`   | Typechecker og bygger til produktion (`dist/`) |
| `npm run preview` | Viser den byggede version lokalt               |
| `npm run lint`    | Kører ESLint på hele projektet                 |

## Projektstruktur

```
src/
├── components/
│   ├── elements/   Mindste genanvendelige dele (Button, Input, Container)
│   ├── layout/     Header, NavBar, Main, Footer
│   └── modules/    Sammensatte dele (PosterCard, CartModule, GenreList)
├── pages/          Én mappe pr. route
├── Hooks/          useFetch og hooks ovenpå den (usePosters, useGenres)
├── context/        CartContext og FavoritesContext
├── routes/         AppRouter med alle routes
├── style/          Tema, globale styles og mixins
├── types/          Typer til API-svar
└── data/           Endpoints
```

Komponenterne er delt op i tre niveauer, så de mindste dele kan genbruges frit, mens
modulerne samler dem til noget med et formål. Hver komponent har sin egen mappe med
`.tsx`, `.styled.ts` og eventuelt `.types.ts`.

## Sådan fungerer indkøbskurven

Kurven ligger i `CartContext`, fordi både NavBar, PosterCard, PosterDetailModule og
CartModule skal læse og ændre den samme kurv. Selve indholdet gemmes i API'et via
`cartline`-endpointet, så kurven overlever en genindlæsning af siden.

Efter hver ændring hentes kurven forfra fra API'et. Det holder frontenden og databasen
i sync uden at duplikere logikken for at udregne linjer og antal.

`USER_ID` i `src/data/Endpoints.tsx` er hardcodet til 2 og simulerer en indlogget
bruger. Rigtig authentication findes i API'et, men er ikke koblet på frontenden, da
login ikke er en del af opgaven.
