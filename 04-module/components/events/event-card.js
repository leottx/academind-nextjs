// Utils
import { parseISO, format } from "date-fns";

// Components
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

// Styles
import classes from "./event-card.module.css";

export default function EventCard({ event }) {
  const { title, date, address, id, image } = event;
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="Event cover" />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>{format(parseISO(date), "PP")}</time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{address}</address>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
