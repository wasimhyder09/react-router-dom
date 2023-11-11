import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  const events = data.events;
  return <EventsList events={events} />
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // An approach to throw errow with loader.
    // return { isError: true, message: 'Could not fetch events. ' }

    //Below is an alternative approach
    throw new Response(JSON.stringify({ message: 'Could not fetch the data.' }), { status: 500 });
  } else {
    return response;
  }
}