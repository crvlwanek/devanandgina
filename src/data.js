import data from "./data.json";

const { bride_name, groom_name, location, date, time, links, attractions } =
  data;

const values = {
  bride_name,
  groom_name,
  location,
  date,
  time,
  links,
  attractions,
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
      name: "events",
      link: "#events",
    },
    {
      name: "attractions",
      link: "#attractions",
    },
  ],
  splash_buttons: [
    {
      name: "Travel Form",
      link: links.transportation_form,
    },
    {
      name: "Registry",
      link: links.registry,
    },
  ],
};

export default values;
