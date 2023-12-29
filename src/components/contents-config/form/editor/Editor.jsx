import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  // const ops = [
  //   { insert: "원격 접속 로그인 알림" },
  //   { attributes: { header: 1 }, insert: "\n" },
  //   { attributes: { background: "#95a5a6", color: "#ffffff" }, insert: "제목" },
  //   { insert: "{{site_name}}" },
  // ];
  const [quillValue, setQuillValue] = useState(`<h1>원격 접속 로그인 알림</h1>
  <p><span style="font-size: 14px;"><span style="background-color: rgb(149, 165, 166); color: rgb(255, 255, 255);">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;제목&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>&nbsp; &nbsp; {{site_name}} 소명 요청 안내</span></p>
  <p><span style="font-size: 14px;"><span style="background-color: rgb(149, 165, 166); color: rgb(255, 255, 255);">&nbsp; &nbsp;탐지시나리오&nbsp; </span><span style="color: rgb(255, 255, 255);">&nbsp; &nbsp; </span><span style="color: rgb(0, 0, 0);">{{snm}}</span></span></p>
  <p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><span style="background-color: rgb(149, 165, 166); color: rgb(236, 240, 241);"><span style="color: rgb(255, 255, 255);">&nbsp; 시나리오오너&nbsp; &nbsp;</span></span>&nbsp; &nbsp; {{s_owner}} / {{s_owner_depx_nm}}</span></span></p>
  <p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><span style="color: rgb(255, 255, 255); background-color: rgb(149, 165, 166);">&nbsp; &nbsp; 탐지대상자&nbsp; &nbsp; </span>&nbsp; &nbsp; {{user_name}} / {{dept_name}}</span></span></p>
  <p><span style="font-size: 14px;"><span style="color: rgb(0, 0, 0);"><span style="color: rgb(255, 255, 255); background-color: rgb(149, 165, 166);">&nbsp; &nbsp; &nbsp;탐지 시각&nbsp; &nbsp; &nbsp;</span>&nbsp; &nbsp; {{detect_run_time}}</span></span></p>
  `);

  console.log("quillValue ::", quillValue);
  // const obj = JSON.parse(string);
  // console.log("obj ::", obj);

  const clickbtn = (e) => {
    e.preventDefault();
    console.log("눌림");
    const string = JSON.stringify(quillValue);
    console.log(string);
  };

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

  const handleQuillChange = (content, delta, source, editor) => {
    setQuillValue(editor.getContents());
  };

  // var container = document.querySelector("#container");
  // var quill = new Quill(container);
  // console.log(Quill.find(container) === quill);

  return (
    <>
      <div>
        <ReactQuill
          style={{ height: "308px" }}
          theme="snow"
          modules={modules}
          formats={formats}
          value={quillValue || ""}
          // value={`${input1}\n${input2}\n${input3}`}
          onChange={handleQuillChange}
        />
      </div>
      <button onClick={clickbtn}>저장</button>
    </>
  );
};

export default Editor;
