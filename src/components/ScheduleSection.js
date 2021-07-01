import * as React from "react";

import { Button } from "./Button";
import Photos from "./Photos";

import data from "../data";

const ScheduleSection = (props) => {
  return props ? (
    <section id="travel">
      <div className="schedule__flex-col">
        <div className="schedule__grid">
          <div className="schedule"></div>
          <div className="schedule__image-box">
            <div className="schedule__MKE-image">
              <Button
                color="var(--theme5)"
                textColor="white"
                href={data.links.transportation_form}
              >
                Wedding Flight Info
              </Button>
            </div>
            <div className="schedule__Lighthouse_Inn-image">
              <Button
                color="var(--theme5)"
                textColor="white"
                href="https://www.lhinn.com/"
              >
                Lighthouse Inn Website
              </Button>
            </div>
            <div className="schedule__St-Peter-image">
              <Button
                color="var(--theme5)"
                textColor="white"
                href="https://www.google.com/maps/place/St.+Peter+the+Fisherman+Catholic+Parish/@44.1443615,-87.5776002,13.25z/data=!4m9!1m2!2m1!1ssaint+peter+the+fisherman!3m5!1s0x0:0xa587ae7f08627576!8m2!3d44.1635293!4d-87.5812818!15sChlzYWludCBwZXRlciB0aGUgZmlzaGVybWFukgEPY2F0aG9saWNfY2h1cmNo"
              >
                Wedding Venue
              </Button>
            </div>
          </div>
        </div>

        <Photos />
      </div>
    </section>
  ) : null;
};

export default ScheduleSection;
