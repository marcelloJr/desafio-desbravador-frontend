import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root.tsx'
import { Paper } from '@mui/material';
import UserDetail from './pages/detail'
import Repos from './pages/repos'
import RepoDetail from './pages/repo-detail/index.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <UserDetail />,
      },
      {
        path: ":user/repos",
        element: <Repos />,
      },
      {
        path: ":user/repos/:repo",
        element: <RepoDetail />,
      },
    ],
  },
]);

const innerHeight = window.innerHeight;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Paper 
        variant='outlined' 
        sx={{
          width: '100%', 
          height: innerHeight, 
          borderRadius: 0, 
          border: 'unset',
          overflow: 'auto',
          display: 'flex',
        }}>
        <RouterProvider router={router} />
      </Paper>
    </ThemeProvider>
  </React.StrictMode>,
)
