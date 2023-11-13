import { useLoaderData, json } from "react-router-dom";
import EventItem from '../components/EventItem'

const EventDetailPage = () => {
  const data = useLoaderData();
  return <>
    <EventItem event={data.event} />
  </>
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.id;
  const response = await fetch('http://localhost:8080/events/' + eventId);
  if (!response.ok) {
    throw json({ message: 'Could not fetch details for selected event.' }, {
      status: 500
    })
  }
  else {
    return response;
  }
}