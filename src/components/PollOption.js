/** @format */

import React from "react";
import {
  Grid,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import BorderLinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { BaseUrl } from "../helpers/Constant";
import { useAuthContext } from "../context/AuthContext";
const PollOption = ({ postid = "" }) => {
  const { token } = useAuthContext();
  const [polls, setPolls] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [selected, setSelected] = React.useState({
    poll_option_id: "0",
  });

  const [finalValue, setfinalValue] = React.useState(0);

  React.useEffect(() => {
    const controller = new AbortController();
    async function anyfunction() {
      if (postid !== null) {
        await axios({
          method: "get",
          url: `${BaseUrl}/poll/${postid}
                   `,
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((response) => {
            let arrobj = response.data.data;
            // console.log(arrobj.voted.poll_option_id);
            setPolls(arrobj.poll_options);

            setSelected((prev) => ({
              poll_option_id:
                Object.keys(arrobj.voted).length < 0
                  ? 0
                  : arrobj.voted.poll_option_id,
            }));
          })
          .catch((error) => console.log);
      }
    }
    setfinalValue(selected.poll_option_id);
    anyfunction();

    return () => {
      controller.abort();
      setPolls([]);
      setSelected({});
      setResult([]);
    };
  }, [postid]);

  const votedSubmit = async (e) => {
    const option_id = e.target.value;
    console.log(option_id);
    let formdata = new FormData();
    formdata.append("poll_option_id", option_id);
    await axios({
      method: "post",
      url: `${BaseUrl}/poll/`,
      data: formdata,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(e.message);
      });
  };

  return (
    <div>
      <FormLabel component="legend">Vote Here!</FormLabel>
      <RadioGroup
        aria-label="gender"
        onChange={votedSubmit}
        value={finalValue}
        name="radio-buttons-group">
        {polls.map((poll, index) => {
          return (
            <Grid container key={index}>
              <Grid item sm={6} md={6}>
                <FormControlLabel
                  value={poll.id}
                  control={<Radio />}
                  label={poll.name}
                />
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
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default PollOption;
