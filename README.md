This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the required dependencies and run the development server:

```bash
npm i 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Search UI Implementation

This project now includes a search UI with the following features:

- **Search Endpoint**: The search functionality is exposed via the API endpoint `/api/search` which accepts POST requests with a JSON body `{ query: string }`.
- **Beautiful and Professional Design**: The UI is designed to be aesthetically pleasing and professional, with a focus on a clean layout.
- **Search Functionality**: Users can input queries to search for faqs. The search is powered by a backend API that scores and returns relevant results.
- **Snippet Display**: For each search result, the title and a short snippet of its body are displayed.
- **Loading and Empty States**: The UI provides clear visual feedback when search results are being loaded and a friendly message when no matches are found.
- **Maximum 3 Results**: The search results are limited to a maximum of 3 items, ordered by relevance.
- **Search Summary**: A 2-3 sentence combined summary of the top matches is generated and displayed, along with a list of source IDs.
- **Error Handling**: The system handles empty search queries by returning a 400 status code from the API and displaying an appropriate error message to the user.

## Assumptions Made

- **Project Structure**: It is assumed that the project is a standard Next.js application.
- **Data Source**: The search API relies on a `data/data.json` file to retrieve search content. It is assumed that this file exists and contains an array of objects, each with `id`, `title`, and `body` properties.

## Deployment
This app is deployed on Netlify and can be tested live at:
https://searchfaqs.netlify.app/