import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routers/Router.jsx";
import AuthProvider from "./Context/AuthContext/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import BookingProvider from "./Context/BookingContext/BookingProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ToastContainer />
    <AuthProvider>
      <BookingProvider>
        <RouterProvider router={router} />
      </BookingProvider>
    </AuthProvider>
  </QueryClientProvider>
);
