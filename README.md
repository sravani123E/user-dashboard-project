# User Dashboard

A responsive React.js dashboard for viewing and searching users, styled with Tailwind CSS and ready for Vercel deployment.

## Features
- User list with search
- User details page
- Global state via React Context
- Routing with React Router
- API calls using Axios
- Responsive design with Tailwind CSS

## Getting Started

### 1. Install dependencies
```
npm install
```

### 2. Start the development server
```
npm start
```

### 3. Build for production
```
npm run build
```

## Vercel Deployment
- Ensure your `vercel.json` contains:
  ```json
  {
    "buildCommand": "npm run build",
    "outputDirectory": "build"
  }
  ```
- Node.js version is specified in `package.json` for compatibility.
- Import your repository into Vercel and deploy.

## Project Structure
```
user-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── userService.js
│   ├── components/
│   │   ├── Header.jsx
│   │   └── UserCard.jsx
│   ├── context/
│   │   └── UserContext.jsx
│   ├── pages/
│   │   ├── DashboardPage.jsx
│   │   └── UserDetailsPage.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## API
- Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) for user data.

## License
MIT
