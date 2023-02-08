import { getAllEvents } from "../../data";

// Hooks
import { useRouter } from "next/router";

// Components
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailsPage() {
  const events = getAllEvents();
  const { query } = useRouter();
  const eventId = query.eventId;
  const event = getEventById();

  function getEventById() {
    return events.find((event) => event.id.toString() === eventId);
  }

  if (!eventId) return <p>No event found!</p>;

  return (
    <>
      <EventSummary event={event} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
