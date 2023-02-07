// function randomDate(start, end) {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }

// function getNumberBetweenRange(start, end) {
//   return Math.floor(Math.random() * (end - start + 1)) + start;
// }

// function getListOfEvents(numberOfEvents) {
//   const events = [];
//   for (let i = 0; i < numberOfEvents; i++) {
//     events.push({
//       title: `Event ${i}`,
//       date: randomDate(
//         new Date(),
//         new Date(getNumberBetweenRange(2023, 2030), 0, 1)
//       ),
//       address: `address ${i}`,
//       isFeatured: Math.random() < 0.5,
//     });
//   }
//   return events;
// }

// const events = getListOfEvents(8);

export const events = [
  {
    id: 0,
    title: "Event 0",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2024-11-21T06:15:27.696Z",
    address: "address 0",
    isFeatured: true,
  },
  {
    id: 1,
    title: "Event 1",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2024-12-22T08:09:19.161Z",
    address: "address 1",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Event 2",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2025-10-23T17:26:56.493Z",
    address: "address 2",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Event 3",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2024-10-24T20:59:51.411Z",
    address: "address 3",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Event 4",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2023-01-12T22:22:35.130Z",
    address: "address 4",
    isFeatured: true,
  },
  {
    id: 5,
    title: "Event 5",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2023-06-21T23:31:09.273Z",
    address: "address 5",
    isFeatured: true,
  },
  {
    id: 6,
    title: "Event 6",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2025-02-10T23:43:16.280Z",
    address: "address 6",
    isFeatured: false,
  },
  {
    id: 7,
    title: "Event 7",
    description: "Lorem ipsum dolor sit amet consectur",
    image: "images/placeholder-image.jpg",
    date: "2026-12-13T09:04:09.468Z",
    address: "address 7",
    isFeatured: false,
  },
];
