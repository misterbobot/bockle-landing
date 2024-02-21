import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { CollectionPage } from "./pages/collection";
import { ECollection } from "./data/types";
import { ItemPage } from "./pages/item";
import { CheckoutPage } from "./pages/checkout/checkout";
import { ThankYouPage } from "./pages/thank-you/thank-you";

export const router = createBrowserRouter([
    {
      path: "/men",
      element: <CollectionPage collectionId={ECollection.MEN} />,
    },
    {
      path: "/woman",
      element: <CollectionPage collectionId={ECollection.WOMAN} />,
    },
    {
      path: "/fw24",
      element: <CollectionPage collectionId={ECollection.FW24} />,
    },
    {
      path: "/item/:productId",
      element: <ItemPage />,
    },
    {
      path: "/checkout/:productId",
      element: <CheckoutPage />,
    },
    {
      path: "/thank-you",
      element: <ThankYouPage />,
    },
    {
      path: "*",
      element: <HomePage />,
    },
  ], {basename: '/brand'});