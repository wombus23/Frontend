import { Navigate, createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  LoginPage,
  SignupPage,
  ContactPage,
  NewChatPage,
  ChatsPage,
  SavedChatsPage,
  SearchPage,
  ErrorPage,
  PricingPage,
  FaqPage,
  FeaturesPage,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/features",
    element: <FeaturesPage />,
  },
  {
    path: "/dashboard",
    element: <Navigate to="/dashboard/chat" />,
  },
  {
    path: "/dashboard/chat",
    element: <NewChatPage />,
  },
  {
    path: "/dashboard/chats",
    element: <ChatsPage />,
  },
  {
    path: "/dashboard/saved",
    element: <SavedChatsPage />,
  },
  {
    path: "/dashboard/search",
    element: <SearchPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
