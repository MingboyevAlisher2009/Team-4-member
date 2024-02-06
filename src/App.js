import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Abaut from './components/pages/Abaut/Abaut';

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Home />
  },
  {
    path: 'abaut',
    element: <Abaut/>
  }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
