// Hooks
import { useRouter } from "next/router";

// Data
import { events } from "../../data";

// Utils
import { format, parseISO } from "date-fns";

export default function FilteredEventsPage() {
  const { query } = useRouter();

  console.log(query?.slug);

  return (
    <>
      <div>
        {events.map((event) => {
          const eventDate = format(parseISO(event.date), "yyyy-MM-dd");
        })}
      </div>
    </>
  );
}
