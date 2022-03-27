/** @format */

import * as React from "react";
import { BaseUrl } from "../helpers/Constant";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AiOutlineDownCircle } from "react-icons/ai";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import Post from "./Post";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  const handleClick = (event) => {};

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PostTabs() {
  const [value, setValue] = React.useState(0);
  const [type, setType] = React.useState(1);
  const { token } = useAuthContext();
  const [loading, setLoading] = React.useState(false);
  const [posts, setPosts] = React.useState([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const sendGetRequest = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `${BaseUrl}/content`,
        params: {
          type: "all",
        },
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const response = res.data;
      if (response.success) {
        setPosts(res.data?.data);
      } else {
        const errms = response.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadPosts = async () => {
    setLoading(true);
    sendGetRequest();
    setLoading(false);
  };

  React.useEffect(() => loadPosts(), []);

  if (loading) {
    return "loading";
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="basic tabs example">
          <Tab label="Public" {...a11yProps(0)} />
          <Tab label="Pantpoe only " {...a11yProps(1)} />
          <Tab
            label="Show All Creator"
            icon={<AiOutlineDownCircle fontSize={"large"} />}
            iconPosition="end"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        pantpoe
      </TabPanel>
      <TabPanel value={value} index={2}>
        cretor only
      </TabPanel>
    </Box>
  );
}
