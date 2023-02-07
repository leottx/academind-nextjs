// Utils
import { parseISO, format } from "date-fns";

// Components
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

export default function EventCard({ event }) {
  const { title, date, location, id, image } = event;
  const exploreLink = `/events/${id}`;

  return (
    <li>
      <figure>
        <img src={`/${image}`} alt="Event cover" />
      </figure>
      <div>
        <h3>{title}</h3>
        <div>
          <DateIcon />
          <time>{format(parseISO(date), "PP")}</time>
        </div>
        <div>
          <AddressIcon />
          <address>{location}</address>
        </div>
        <Button link={exploreLink}>
          <ArrowRightIcon />
          <span>Explore event</span>
        </Button>
      </div>
    </li>
  );
}
