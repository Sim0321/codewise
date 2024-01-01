import React, { useState } from "react";
import * as S from "./ModalSearch.style";
import InputText from "./../../input/InputText";
import { useSetRecoilState } from "recoil";
import { requestSelector } from "../../../../store/request";
import Button from "../../button/Button";

const ModalSearch = ({ setmodalopen }) => {
  const setRequest = useSetRecoilState(requestSelector);

  const [data, setData] = useState({
    mailType: "",
    mailTitle: "",
    ismailIUse: "",
    limit: 10,
    currentPage: 1,
  });

  const handleRadio = (e) => {
    setData({ ...data, ismailIUse: e.target.id });
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  /** 검색 */
  const submitSearch = () => {
    if (!data.mailType && !data.mailTitle && !data.ismailIUse) {
      alert("최소 하나는 있어야해요");
    } else {
      setRequest(data);
      setmodalopen(false);
    }
  };

  return (
    <S.ModalSearchContainer>
      <div className="category">
        <div className="category-name">MailType</div>
        <InputText
          bg="transparent"
          color="#fff"
          placeholder="메일 유형을 입력해주세요."
          name="mailType"
          value={data.mailType}
          onChange={onChange}
        />
      </div>

      <div className="category">
        <div className="category-name">MailTitle</div>
        <InputText
          bg="transparent"
          color="#fff"
          placeholder="메일 발송제목을 입력해주세요."
          name="mailTitle"
          value={data.mailTitle}
          onChange={onChange}
        />
      </div>

      <div className="category">
        <div className="category-name">IsmailIUse</div>
        <div className="radio-label">
          <input
            type="radio"
            id="Y"
            onChange={handleRadio}
            checked={data.ismailIUse === "Y"}
          />
          <label htmlFor="Y">사용</label>
          <input
            type="radio"
            id="N"
            onChange={handleRadio}
            checked={data.ismailIUse === "N"}
          />
          <label htmlFor="N">미사용</label>
        </div>
      </div>
      <span>* 최소 하나 이상은 입력해주세요.</span>

      <div className="btn-container">
        <Button
          desc="검색"
          size="long"
          bg="rgba(70, 68, 68, 0.4)"
          color="#fff"
          hoverbg="#fff"
          hovercolor="rgba(70, 68, 68, 1)"
          onClick={submitSearch}
        />
      </div>
    </S.ModalSearchContainer>
  );
};

export default ModalSearch;
