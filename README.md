# Danelfin App

Welcome to the documentation for Danelfin App, built with Next.js.

## Description

Danelfin is a stock analytics platform powered by Explainable Artificial Intelligence. It rates stocks and ETFs with an easy-to-understand global AI Score, ranging from 1 to 10; the higher the score, the higher the probability of beating the market in the next 3 months.

## Technologies Used

- [Next.js](https://nextjs.org)
- [React](https://reactjs.org)
- [Vercel](https://vercel.com/)

## Folder Structure
/components
/context
/data
/documentation
/helpers
/hooks
/pages
/public
/styles
## Installation Instructions

1. Clone this repository: `git clone https://yourusername@bitbucket.org/gsafer-danelfin/nextjs-danelfin.git`
2. Navigate to the project directory: `cd nextjs-danelfin`
3. Install the dependencies: `npm install`

## Development Instructions

1. Start the development server: `npm run dev`
2. Open your browser at: `http://localhost:3000`

## Deployment Instructions

To deploy the application to a production environment:

1. Merge your branch with main and `git push origin main`

## Global State

We use Context API for global state management in the application. You can find most of the logic in `/context/pageContext.js`.

## helpers

We use helpers for sharing functions between components. You can find most of the logic in `/helpers`.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)

T