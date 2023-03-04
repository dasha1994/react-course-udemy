import {
  Link,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
} from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useRouteLoaderData("detail");
  const event = data.event;
  return <EventForm method="PATCH" event={event} />;
}

export default EditEventPage;
