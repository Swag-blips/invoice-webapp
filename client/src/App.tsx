import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import Receipt from "./pages/receipt/Receipt";
import CreateReceipt from "./pages/create/CreateReceipt";
import SignIn from "./pages/auth/SignIn";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import AuthCallback from "./pages/auth/AuthCallback";

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

    {
      path: "/create-receipt",
      element: <CreateReceipt />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-in/sso-callback",
      element: <AuthenticateWithRedirectCallback />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
