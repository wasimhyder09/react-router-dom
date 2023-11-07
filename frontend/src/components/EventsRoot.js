import { Outlet } from "react-router-dom";
import EventsNavigation from './EventsNavigation'

const EventRoot = () => {
  return <>
    <EventsNavigation />
    <Outlet />
  </>
};

export default EventRoot;