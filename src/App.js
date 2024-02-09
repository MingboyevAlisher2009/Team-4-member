import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Abaut from "./components/pages/Abaut/Abaut";
import Prodact from "./components/pages/buyurtma/Prodact";
import Purchase from "./components/pages/buyurtma/Purchase";
import Portfoli from "./components/pages/portfoli/Portfoli";
import img1 from "./img/photo_2024-02-03_09-47-31.jpg";
import img2 from "./img/photo_2024-02-03_09-47-31.jpg";
import img3 from "./img/photo_2024-02-03_09-50-51.jpg";
import img4 from "./img/photo_2024-02-03_09-50-56.jpg";
import Slider from "./Slider";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about",
      element: <Abaut />,
    },
    {
      path: "portfoli",
      element: <Portfoli />,
    },
    {
      path: "prodact",
      element: <Prodact />,
    },
    {
      path: "purchase",
      element: <Purchase />,
    },
    {
      path: 'slider',
      element: <Slider/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
