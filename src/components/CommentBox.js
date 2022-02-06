/** @format */

import { Button, TextareaAutosize } from "@mui/material";
import React from "react";
const CommentBox = ({ result = "", ...props }) => {
  const [value, setValue] = React.useState("");

  const { boxType, inputHandle, submitHandling, postid } = props;

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
    inputHandle(e);
  };
  return (
    <div style={{ marginRight: "8px" }}>
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
        onClick={submitHandling(postid)}
        type="submit"
        variant="outlined"
        className="comments-button"
        id={changeCommentButtonStyle()}
        disabled={enableCommentButton()}>
        Post
      </Button>
    </div>
  );
};

export default CommentBox;
