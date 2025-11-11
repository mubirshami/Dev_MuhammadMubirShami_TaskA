This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Search UI Implementation

This project now includes a search UI with the following features:

- **Search Endpoint**: The search functionality is exposed via the API endpoint `/api/search` which accepts POST requests with a JSON body `{ query: string }`.
- **Beautiful and Professional Design**: The UI is designed to be aesthetically pleasing and professional, with a focus on a clean layout and no shadows.
- **Search Functionality**: Users can input queries to search for faqs. The search is powered by a backend API that scores and returns relevant results.
- **Snippet Display**: For each search result, the title and a short snippet (first 200 characters) of its body are displayed.
- **Loading and Empty States**: The UI provides clear visual feedback when search results are being loaded and a friendly message when no matches are found.
- **Maximum 3 Results**: The search results are limited to a maximum of 3 items, ordered by relevance.
- **Search Summary**: A 2-3 sentence combined summary of the top matches is generated and displayed, along with a list of source IDs.
- **Error Handling**: The system handles empty search queries by returning a 400 status code from the API and displaying an appropriate error message to the user.

## Assumptions Made

- **Project Structure**: It is assumed that the project is a standard Next.js application.
- **Data Source**: The search API relies on a `data/data.json` file to retrieve search content. It is assumed that this file exists and contains an array of objects, each with `id`, `title`, and `body` properties.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
