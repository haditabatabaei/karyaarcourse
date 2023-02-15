import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import Home from '../../pages/Home';
import Posts from '../../pages/Posts';
import TodoList from '../../pages/TodoList';
import Product from '../../pages/Product';

import './style.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/posts',
    element: <Posts />
  },
  {
    path: '/todo-list',
    element: <TodoList />,
    children: [
      {
        path: 'ali',
        element: '...'
      }
    ]
  },
  {
    path: '/todo-list/item',
    element: <p>salam</p>
  },
  {
    path: '/product/:id',
    element: <Product />
  },
  {
    path: '/404',
    element: <p>Page Not Found!</p>
  },
  {
    path: '*',
    element: <Navigate to="/404" />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;