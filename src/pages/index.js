import * as React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import LandingSection from "../components/LandingSection";
import ScheduleSection from "../components/ScheduleSection";
import AttractionsSection from "../components/AttractionsSection";
import Footer from "../components/Footer";

import { setViewHeight } from "../utils/setViewHeight";

import data from "../data.js";

setViewHeight();

const rightMenu = data.navitems;

const IndexPage = () => {
  return (
    <Layout>
      <Navbar rightMenu={rightMenu} />
      <LandingSection
        groom_name={data.groom_name}
        bride_name={data.bride_name}
        date={data.date}
        time={data.time}
        location={data.location}
      />
      <ScheduleSection schedule={data.schedule} />
      <AttractionsSection />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
