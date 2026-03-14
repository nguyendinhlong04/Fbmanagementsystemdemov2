import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import POSOrders from "./components/POSOrders";
import MenuManagement from "./components/MenuManagement";
import Inventory from "./components/Inventory";
import TaxSettings from "./components/TaxSettings";
import SalesRevenue from "./components/SalesRevenue";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: POSOrders },
      { path: "menu", Component: MenuManagement },
      { path: "inventory", Component: Inventory },
      { path: "tax", Component: TaxSettings },
      { path: "sales", Component: SalesRevenue },
    ],
  },
]);
