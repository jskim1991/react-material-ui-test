const members = [
  {
    id: 1,
    name: "Jay",
  },
  {
    id: 2,
    name: "Su",
  },
  {
    id: 3,
    name: "John",
  },
  {
    id: 4,
    name: "Sam",
  },
  {
    id: 5,
    name: "Joel",
  },
  {
    id: 6,
    name: "Steve",
  },
  {
    id: 7,
    name: "Jun",
  },
  {
    id: 8,
    name: "Choi",
  },
  {
    id: 9,
    name: "Lee",
  },
  {
    id: 10,
    name: "Mush",
  },
];

export const fetchFromBackend = (page, limit) => {
  const from = page * limit;
  return Promise.resolve({
    totalElements: members.length,
    content: members.slice(from, from + limit),
  });
};
