import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEventPage";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as detailLoader,
  action as deleteEventAction,
} from "./pages/EventsDetailPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import EventsRootLayout from "./pages/EventsRoot";
import HomePage from "./pages/HomePage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/Root";
import { action as manipulateAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./pages/NewsLetter";

// import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":id",
            id: "detail",
            loader: detailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateAction,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: manipulateAction },
        ],
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
