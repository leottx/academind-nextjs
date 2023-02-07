import { events } from "../../data";

// Components
import EventCard from "./event-card";

export default function EventList() {
  return (
    <ul>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}
