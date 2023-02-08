// Data
import { getAllEvents } from "../../data";

// Components
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <>
      <EventSearch />
      <EventList events={events} />
    </>
  );
}
