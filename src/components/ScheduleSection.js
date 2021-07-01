import * as React from "react";
import { Grid } from "@material-ui/core";

import Photos from "./Photos";

import data from "../data";

const ScheduleSection = (props) => {
  return props ? (
    <section id="travel">
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className="schedule-row"
      >
        <Grid item xs={12} md={6}>
          <div className="schedule">
            <a
              className="schedule__travel-link"
              href={data.links.transportation_form}
              target="_blank"
              rel="noreferrer"
            ></a>
            <div className="schedule__events" id="events"></div>
          </div>
        </Grid>

        <Photos />
      </Grid>
    </section>
  ) : null;
};

export default ScheduleSection;
