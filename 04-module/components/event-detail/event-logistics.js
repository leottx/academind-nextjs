// Components
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";

// Styles
import classes from "./event-logistics.module.css";

// Utils
import { format, parseISO } from "date-fns";

function EventLogistics({ event }) {
  const { date, address, image } = event;

  const humanReadableDate = format(parseISO(date), "PP");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <img src={`/${image}`} alt="Event banner" />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{address}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
