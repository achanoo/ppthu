/** @format */

import React, { useRef, useMemo } from "react";
import JoditEditor from "jodit-react";

const Editor = ({ oldvalue = "", ...props }) => {
  const { contents, getValue } = props;
  const [content, setContent] = React.useState("");
  const editor = useRef(null);

  const placeholder = " type herr";
  const config = {
    buttons: [
      "bold",
      "italic",
      "underline",
      "strikethrough",
      "|",
      "ul",
      "ol",
      "|",
      "center",
      "left",
      "right",
      "justify",
      "|",
      "link",
      // 'image',
    ],
    uploader: { insertImageAsBase64URI: true },
    removeButtons: ["brush", "file", "image"],
  };

  //contents is the dynamic value from parent

  React.useEffect(() => {
    console.log(contents);
    setContent(contents);
  }, [props?.contents]);

  // return (
  //   <JoditEditor
  //     ref={editor}
  //     value={contents}
  //     config={config}
  //     tabIndex={1} // tabIndex of textarea
  //     onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
  //     onChange={(content) => getValue(content)}
  //   />
  // );

  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      onBlur={(newContent) => setContent(newContent)}
      onChange={(content) => getValue(content)}
    />
  );
};

export default Editor;
