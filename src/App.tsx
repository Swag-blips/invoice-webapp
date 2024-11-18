import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import Receipt from "./pages/receipt/Receipt";

function App() {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/receipt/:id",
          element: <Receipt />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
