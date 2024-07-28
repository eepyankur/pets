# PETS

Browse pets available for adoption! 


## Getting Started

### Clone repository:
```
git clone https://github.com/eepyankur/pets.git
```

### Install Dependencies:
You can use either npm or pnpm:
```
npm install
```
or
```
pnpm install
```

### List all available commands:
```
npm run
```

## Project Structure
The project structure is as follows:

```
.                           # Parent directory
├── public                  # Stores public assets
├── src                     # Source directory
│   ├── assets              # Stores static assets
│   ├── components          # Store UI components
│   ├── pages               # Different routes of the application
│   ├── services            # ContextAPI and FetchAPI
│   ├── utils               # Providers
│   ├── App.tsx             # React router setup
│   ├── index.css           # Global CSS file
│   ├── main.tsx            # Renders react at root
│   └ ...      
├── index.html              # Main HTML file with root     
├── package.json            # Project dependencies       
├── README.md               # Project documentation (this file)     
└── ...                     # Configs/modules/etc
```



## Design Decisions

This [React](https://react.dev/) project is set up using [Vite](https://vitejs.dev/) with [TypeScript](https://www.typescriptlang.org/),
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Tailwind](https://tailwindcss.com/).

- `Global State Management`:  React ContextAPI manages global states.
- `Routing`:  React Router is used for navigation.
- `Data Fetching`:  Fetch API is used for HTTP data requests.
- `Styling`: TailwindCSS is used for styling. The design focuses on simplicity and usability. The UI is minimal yet 
  responsive.
- `Coding Practices` : ESLint, Prettier and TypeScript are used to format and maintain code quality + reliability 
  while catching and fixing errors early during development.