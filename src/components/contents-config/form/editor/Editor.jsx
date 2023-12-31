import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({ handleQuillChange, editorValue, readOnly }) => {
  // const ops = [
  //   { insert: "원격 접속 로그인 알림" },
  //   { attributes: { header: 1 }, insert: "\n" },
  //   { attributes: { background: "#95a5a6", color: "#ffffff" }, insert: "제목" },
  //   { insert: "{{site_name}}" },
  // ];

  // console.log("quillValue ::", quillValue);
  // const obj = JSON.parse(string);
  // console.log("obj ::", obj);

  // const clickbtn = (e) => {
  //   e.preventDefault();
  //   // console.log("눌림");
  //   const string = JSON.stringify(quillValue);
  //   // console.log(string);
  // };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];

  const modules = {
    toolbar: {
      // container: [
      //   [{ header: [1, 2, 3, 4, 5, false] }],
      //   ["image"],
      //   ["bold", "underline"],
      // ],
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
        ["clean"],
      ],
      // handlers: {
      //   text: inputHandler,
      // },
    },
  };

  // const handleQuillChange = (content, delta, source, editor) => {
  //   setQuillValue(editor.getContents());
  // };

  // var container = document.querySelector("#container");
  // var quill = new Quill(container);
  // console.log(Quill.find(container) === quill);

  return (
    <ReactQuill
      style={{ height: "308px" }}
      theme="snow"
      modules={modules}
      formats={formats}
      value={editorValue || ""}
      onChange={handleQuillChange}
      readOnly={readOnly}
    />
  );
};

export default Editor;
