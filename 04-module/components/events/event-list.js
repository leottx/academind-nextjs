// Components
import EventCard from "./event-card";

// Styles
import classes from "./event-list.module.css";

export default function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </ul>
  );
}
