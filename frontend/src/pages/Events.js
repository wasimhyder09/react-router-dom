import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense >
  );
}

export default EventsPage;
async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // An approach to throw errow with loader.
    // return { isError: true, message: 'Could not fetch events. ' }

    //Below is an alternative approach
    // throw new Response(JSON.stringify({ message: 'Could not fetch the data.' }), { status: 500 });

    // Another apprach is to user "json" hook provided by react-router-dom;
    throw json(
      { message: 'Could not fetch the data.' },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export function loader() {
  return defer({
    events: loadEvents()
  });
}