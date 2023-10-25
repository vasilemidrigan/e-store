import { uuid } from "uuidv4";

{
  products: [
    {
      id: uuid(),
      name: "Samsung S10",
      price: 746,
      imgURLs: ["url1", "url2", "url3", "url4"],
      category: "smartphones",
    },
  ];
}

{
  categories: [
    {
      id: uuid(),
      name: "smartphones",
    },
    {
      id: uuid(),
      name: "computers",
    },
    {
      id: uuid(),
      name: "displays",
    },
    {
      id: uuid(),
      name: "photography",
    },
    {
      id: uuid(),
      name: "headphones",
    },
  ];
}
