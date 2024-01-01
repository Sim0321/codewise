import React from "react";
import * as S from "./TableList.style";
import Content from "../content/Content";
import { useRecoilValue } from "recoil";
import { purposeSelector } from "../../../../store/purposeAtome";
import Loading from "../../../common/loading/Loading";

const TableList = ({ data, error, isLoading, checkSingle }) => {
  const purpose = useRecoilValue(purposeSelector);

  /** 컨텐츠 렌더하는 함수 */
  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }
    if (error) {
      return <p>Error : {error}</p>;
    }
    if (data.articles.length === 0) {
      return <p>검색결과가 없거나 컨텐츠가 없습니다.</p>;
    } else {
      return data.articles?.map((content) => {
        return (
          <Content
            key={content.mailUid}
            content={content}
            checkSingle={checkSingle}
          />
        );
      });
    }
  };
  return <S.TableListWrap purpose={purpose}>{renderContent()}</S.TableListWrap>;
};

export default TableList;
