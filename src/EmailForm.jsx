import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form);
    // emailjs
    //   .sendForm(
    //     // "YOUR_SERVICE_ID",
    //     process.env.REACT_APP_SERVICE_ID,
    //     // "YOUR_TEMPLATE_ID",
    //     process.env.REACT_APP_TEMPLATE_ID,
    //     form.current,
    //     // "YOUR_PUBLIC_KEY"
    //     process.env.REACT_APP_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>제목</label>
      <input type="text" name="site_name" />
      <label>탐지시나리오</label>
      <input type="text" name="snm" />
      <label>시나리오오너</label>
      <input type="text" name="s_owner" /> /
      <input type="text" name="s_owner_dept_nm" />
      <label>탐지대상자</label>
      <input type="text" name="user_name" /> /
      <input type="text" name="dept_name" />
      <label>탐지시각</label>
      <input type="text" name="detect_run_time" />
      {/* <input type="text" name="description" /> */}
      <textarea name="description" id="" cols="30" rows="10"></textarea>
      <input type="submit" value="Send" />
    </form>
  );
};

export default EmailForm;
