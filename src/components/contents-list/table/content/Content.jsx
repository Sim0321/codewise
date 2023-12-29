import React from "react";
import * as S from "./Content.style";
import useDateFormat from "../../../../hooks/useDateFormat";
import useEmail from "../../../../hooks/useEmail";

import CheckBox from "../../../common/checkbox/CheckBox";
import { useRecoilValue } from "recoil";
import { checkListSelector } from "../../../../store/checkAtom";

const Content = ({ content, checkSingle }) => {
  const format = useDateFormat(content.modificationDate);

  const checkList = useRecoilValue(checkListSelector);

  return (
    <S.Content checked={checkList.includes(content.mailUid)}>
      <CheckBox
        checked={checkList.includes(content.mailUid)}
        onChange={(checked) => checkSingle(checked, content.mailUid)}
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
