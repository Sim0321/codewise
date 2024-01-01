import React from "react";
import * as S from "./Content.style";
import useDateFormat from "../../../../hooks/useDateFormat";
import useEmail from "../../../../hooks/useEmail";

import CheckBox from "../../../common/checkbox/CheckBox";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { checkListSelector } from "../../../../store/checkAtom";
import { purposeSelector } from "../../../../store/purposeAtome";
import { readDetailSelector } from "../../../../store/contentDetailAtom";

const Content = ({ content, checkSingle }) => {
  const setPurpose = useSetRecoilState(purposeSelector);
  const setData = useSetRecoilState(readDetailSelector);
  const readContent = () => {
    // e.stopPropagation();
    console.log("li 눌림");
    setPurpose("read");
    setData(content);
  };

  // const changeCheck = (checked) => {
  //   checkSingle(checked, content.mailUid);
  // };
  const format = useDateFormat(content.modificationDate);

  const checkList = useRecoilValue(checkListSelector);

  return (
    <S.Content
      onClickCapture={readContent}
      checked={checkList.includes(content.mailUid)}
    >
      <CheckBox
        checked={checkList.includes(content.mailUid)}
        onChange={(checked) => checkSingle(checked, content.mailUid)}
        // onChange={changeCheck}
      />
      <div className="table-number detail">{content.mailUid}</div>
      <div className="table-type detail ">{content.mailType}</div>
      <div className="table-title detail text-left">{content.mailTitle}</div>
      <div className="table-use detail">{useEmail(content.ismailIUse)}</div>
      <div className="table-date detail">{format}</div>
    </S.Content>
  );
};

export default Content;
