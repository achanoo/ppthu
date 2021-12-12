/** @format */

import React from "react";
import { Grid, FormControlLabel, Checkbox } from "@mui/material";

import BorderLinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { BaseUrl } from "../helpers/Constant";
import { useAuthContext } from "../context/AuthContext";
const PollOption = ({ postid }) => {
  const { token } = useAuthContext();
  React.useEffect(() => {
    const controller = new AbortController();
    if (postid !== null) {
      axios({
        method: "get",
        url: `${BaseUrl}/poll/${postid}
`,
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log);
    }
    return () => {
      controller.abort();
    };
  }, [postid]);

  return (
    <div>
      <Grid container>
        <Grid item sm={6} md={6}>
          <FormControlLabel control={<Checkbox />} label="helo" />
        </Grid>
        <Grid item sm={6} md={6}>
          <BorderLinearProgress
            style={{ marginTop: "1.2em", width: "60%" }}
            variant="determinate"
            value={50}
            color="secondary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PollOption;
