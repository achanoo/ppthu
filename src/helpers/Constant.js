/** @format */

import React from "react";
import moment from "moment";
//export const BaseUrl2 = validateURL("http://localhost:8000/api/v1");
function validateURL(url) {
  const parsed = new URL(url);
  return ["https:", "http:"].includes(parsed.protocol) ? url : "invaluid route";
}
const backendurl = "http://adminpanel.pantpoe.com";
export const BaseUrl = validateURL(`${backendurl}/api/v1`);
//export const single_product_url = `https://course-api.com/react-store-single-product?id=`

export const ImgUrl = `${backendurl}storage/`;

export const customFetcher = async (url = "") => {
  const response = await fetch(`https://rlp-proxy.herokuapp.com/v2?url=${url}`);
  const json = await response.json();

  return json.metadata;
};

export const getFullUrl = (path) => {
  return `${backendurl}/storage/` + path;
};
export const FrontEndBaseUrl = "http://pantpoe.com/";

export const RBaseUrl = "http://pantpoe.com/creator-profile/";

export const profileUrl = (keyword) => {
  return `http://pantpoe.com/${keyword}`;
};

export const changeSocials = (data) => {
  let acc = [];
  console.log(data);
  if (data.length > 0) {
    return data.map((i) => {
      acc[0] = i.link;
      acc[1] = i.name;
      return [...acc];
    });
  } else {
    return [];
  }
};

export const getByLastMonth = () => {
  // var date = new Date();
  // var firstDay = new Date(date.getFullYear(), date.getMonth() - 1, 1);
  // var lastDay = new Date(date.getFullYear(), date.getMonth(), 0);
  // alert(firstDay.format("MM/DD/YYYY") + "===" + lastDay.format("MM/DD/YYYY"));
  let thisMoment = moment();
  let endOfMonth = moment(thisMoment).endOf("month").subtract(1, "months");
  let startOfMonth = moment(thisMoment).startOf("month").subtract(1, "months");

  return {
    start: startOfMonth.format("YYYY-MM-DD"),
    end: endOfMonth.format("YYYY-MM-DD"),
  };
};

export const getByLastWeek = () => {
  return {
    start: moment().subtract(1, "weeks").startOf("week").format("YYYY-MM-DD"),
    end: moment().subtract(1, "weeks").endOf("week").format("YYYY-MM-DD"),
  };
};
export const getBycurrentWeek = () => {
  var startDate = moment().startOf("week");
  var endDate = moment().endOf("week");

  return {
    start: new Date(startDate.format("YYYY-MM-DD")).getTime(),
    end: new Date(endDate.format("YYYY-MM-DD")).getTime(),
  };
};
export const getByThisMonth = () => {
  let thisMoment = moment();
  let endOfMonth = moment(thisMoment).endOf("month");
  let startOfMonth = moment(thisMoment).startOf("month");
  return {
    start: new Date(startOfMonth.format("YYYY-MM-DD")).getTime(),
    end: new Date(endOfMonth.format("YYYY-MM-DD")).getTime(),
  };
};
