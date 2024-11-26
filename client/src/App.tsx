import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import AuthCallback from "./pages/auth/AuthCallback";
import Invoice from "./pages/invoice/Invoice";
import CreateInvoice from "./pages/create/CreateInvoice";

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
          path: "/invoice/:id",
          element: <Invoice />,
        },
      ],
    },

    {
      path: "/create-invoice",
      element: <CreateInvoice />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/auth-callback",
      element: <AuthCallback />,
    },
    {
      path: "/sign-in/sso-callback",
      element: (
        <AuthenticateWithRedirectCallback
          signUpForceRedirectUrl={"/auth-callback"}
        />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
