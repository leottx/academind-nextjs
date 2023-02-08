// Hooks
import { useRouter } from "next/router";

// Components
import EventList from "../../components/events/event-list";

// Data
import { getAllEvents } from "../../data";

// Utils
import { format, parseISO } from "date-fns";

export default function FilteredEventsPage() {
  const events = getAllEvents();
  const { query } = useRouter();
  const filterData = query.slug;

  if (!filterData) return <p>Loading...</p>;

  const [filteredYear, filteredMonth] = filterData;

  const filteredEvents = events.filter((event) => {
    const eventDate = format(
      parseISO(event.date),
      "yyyy-LLLL-dd"
    ).toLowerCase();

    if (eventDate.includes(filteredYear) && eventDate.includes(filteredMonth)) {
      return event;
    }
  });

  return (
    <>
      <div>
        <EventList events={filteredEvents} />
      </div>
    </>
  );
}
