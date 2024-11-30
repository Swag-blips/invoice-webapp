import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import Invoice from "./pages/invoice/Invoice";
import CreateInvoice from "./pages/create/CreateInvoice";
import Empty from "./components/home/Empty";

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
        {
          path: "*",
          element: <Empty />,
        },
      ],
    },

    {
      path: "/create-invoice",
      element: <CreateInvoice />,
    },
    {
      path: "/edit-invoice/:id",
      element: <CreateInvoice />,
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },

    {
      path: "/sign-in/sso-callback",
      element: (
        <AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/"} />
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
