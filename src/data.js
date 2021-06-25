import data from "./data.json";

const { bride_name, groom_name, location, date, time, links } = data;

const values = {
  bride_name,
  groom_name,
  location,
  date,
  time,
  navitems: [
    {
      name: "registry",
      link: links.registry,
    },
    {
      name: "travel",
      link: "#travel",
    },
    {
      name: "schedule",
      link: "#schedule",
    },
    {
      name: "attractions",
      link: "#attractions",
    },
  ],
  splash_buttons: [
    {
      name: "Travel Info",
      link: "#travel",
    },
    {
      name: "Registry",
      link: links.registry,
    },
  ],
};

export default values;
