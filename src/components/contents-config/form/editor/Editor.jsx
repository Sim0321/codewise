import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ handleQuillChange, editorValue, readOnly }) => {
  // 현재 bold, italic 이슈 있음 https://github.com/zenoamaro/react-quill/issues/891
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ font: [] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        [{ color: [] }, { background: [] }],

        [{ align: [] }],
        ["clean"],
      ],
    },
  };

  return (
    <ReactQuill
      style={{ height: "308px" }}
      theme="snow"
      modules={modules}
      value={editorValue || ""}
      onChange={handleQuillChange}
      readOnly={readOnly}
    />
  );
};

export default Editor;
