// Components
import EventList from "../components/events/event-list";

// Utils
import { getAllFeaturedEvents } from "../data/";

export default function HomePage() {
  const events = getAllFeaturedEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
