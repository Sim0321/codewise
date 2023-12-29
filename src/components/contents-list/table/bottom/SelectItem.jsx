import React from "react";

const SelectItem = ({ num, choseLimit }) => {
  return <li onClick={choseLimit}>{num}</li>;
};

export default SelectItem;
