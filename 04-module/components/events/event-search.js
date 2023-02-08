// Utils
import { parseISO, format } from "date-fns";
import { getAllEvents } from "../../data";

// Hooks
import { useState } from "react";
import { useRouter } from "next/router";

// Components
import Button from "../ui/button";

// Styles
import classes from "./event-search.module.css";

export default function EventSearch() {
  const events = getAllEvents();
  const years = getYears();
  const months = getMonths();
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const router = useRouter();

  function getMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber);

    return date
      .toLocaleString("en-US", {
        month: "long",
      })
      .toLowerCase();
  }

  function getYears() {
    const years = [];

    events.forEach((event) => {
      const year = format(parseISO(event.date), "yyyy");

      if (years.includes(year)) return;

      years.push(year);
    });

    years.sort((a, b) => a - b);

    return years;
  }

  function setFilteredRoute() {
    const filteredURL = `http://localhost:3000/events/${selectedYear}/${selectedMonth}`;

    router.push(filteredURL);
  }

  function getMonths() {
    const monthsCount = 12;

    return Array(monthsCount)
      .fill(1)
      .map((option, index) => getMonthName(index));
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFilteredRoute();
      }}
      className={classes.form}
    >
      <div className={classes.controls}>
        <label className={classes.control}>
          <span>Year</span>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <label className={classes.control}>
          <span>Month</span>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value.toLowerCase())}
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Button>Filter</Button>
    </form>
  );
}
