import { NavLink } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: 'e1', title: 'Event 1' },
  { id: 'e2', title: 'Event 2' },
  { id: 'e3', title: 'Event 3' },
  { id: 'e4', title: 'Event 4' },
  { id: 'e5', title: 'Event 5' },
];

const EventsPage = () => {
  return <><h1>Events Page</h1>
    {DUMMY_EVENTS.map((event) => {
      return <p><NavLink to={event.id}>{event.title}</NavLink></p>
    })}
  </>
};

export default EventsPage;