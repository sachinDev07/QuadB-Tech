import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ShowListsPage from "./pages/ShowListsPage.jsx";
import ShowSummaryPage from "./pages/ShowSummaryPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ShowListsPage />,
      },
      {
        path: "/summary/:id",
        element: <ShowSummaryPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
