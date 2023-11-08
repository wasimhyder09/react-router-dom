import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return <>
    <h1>Event Detail Page</h1>
    <h2>{params.id}</h2>
  </>
};

export default EventDetailPage;