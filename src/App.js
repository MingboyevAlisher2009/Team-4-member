import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Abaut from './components/pages/Abaut/Abaut';
import Prodact from './components/pages/buyurtma/Prodact';
import Purchase from './components/pages/buyurtma/Purchase';

function App() {

  const router = createBrowserRouter([{
    path: '/',
    element: <Home />
  },
  {
    path: 'abaut',
    element: <Abaut/>
  },
  {
    path: 'prodact',
    element: <Prodact/>
  },
  {
    path: 'purchase',
    element: <Purchase/>
  }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
