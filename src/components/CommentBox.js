/** @format */

import { Button, TextareaAutosize } from "@mui/material";
import React from "react";
import axios from "axios";
import { BaseUrl } from "../helpers/Constant";
import { useAuthContext } from "../context/AuthContext";
import { useBlogContext } from "../context/PostBlogContext";

const CommentBox = ({ result = "", ...props }) => {
  const [value, setValue] = React.useState("");
  const { id } = props;
  const { boxType } = props;
  const { token } = useAuthContext();
  const { reloading, setReloading } = useBlogContext();

  const enableCommentButton = () => {
    return value.length > 0 ? false : true;
  };
  const changeCommentButtonStyle = () => {
    return value.length > 0
      ? "comments-button-enabled"
      : "comments-button-disabled";
  };

  const getData = (e) => {
    // handleCommentValue(e);
    setValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "post",
      url: `${BaseUrl}/comment/`,
      data: { content_id: id.toString(), comment: value },
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    setReloading(!reloading);
  };
  return (
    <form style={{ marginRight: "8px" }} onSubmit={handleSubmit}>
      <TextareaAutosize
        // onKeyPress={enterCommentLine}
        value={value}
        name={boxType}
        id="comments-input"
        onChange={getData}
        variant="outlined"
        placeholder="Add a comment..."
        aria-label="minimum height"
        minRows={4}
        style={{ width: "100%", resize: "none" }}
      />
      <Button
        style={{ float: "right", marginTop: "10px" }}
        type="submit"
        variant="outlined"
        className="comments-button"
        id={changeCommentButtonStyle()}
        disabled={enableCommentButton()}>
        Post
      </Button>
    </form>
  );
};

export default CommentBox;
