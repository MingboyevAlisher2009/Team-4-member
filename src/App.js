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

function App() {
  const slidesData = [
    {
      image:
        "https://img.freepik.com/premium-vector/instagram-popular-social-media-icon-editorial-only-kyiv-ukraine-december-3-2019_944081-64.jpg",
      cards: ["Card 1.1", "Card 1.2", "Card 1.3"],
    },
    {
      image:   "https://img.freepik.com/premium-vector/instagram-popular-social-media-icon-editorial-only-kyiv-ukraine-december-3-2019_944081-64.jpg",
      cards: ["Card 2.1", "Card 2.2", "Card 2.3"],
    },
    {
      image: "https://img.freepik.com/premium-vector/instagram-popular-social-media-icon-editorial-only-kyiv-ukraine-december-3-2019_944081-64.jpg",
      cards: ["Card 3.1", "Card 3.2", "Card 3.3"],
    },
    {
      image: "https://img.freepik.com/premium-vector/instagram-popular-social-media-icon-editorial-only-kyiv-ukraine-december-3-2019_944081-64.jpg",
      cards: ["Card 4.1", "Card 4.2", "Card 4.3"],
    },
    {
      image:   "https://img.freepik.com/premium-vector/instagram-popular-social-media-icon-editorial-only-kyiv-ukraine-december-3-2019_944081-64.jpg",
      cards: ["Card 5.1", "Card 5.2", "Card 5.3"],
    },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "abaut",
      element: <Abaut />,
    },
    {
      path: "portfoli",
      element: <Portfoli slides={slidesData} />,
    },
    {
      path: "prodact",
      element: <Prodact />,
    },
    {
      path: "purchase",
      element: <Purchase />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
