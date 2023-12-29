import React from "react";
import * as S from "../Table.style";
import Content from "../content/Content";

const TableList = ({ data, error, isLoading, checkSingle }) => {
  // 컨텐츠 렌더하는 함수
  const renderContent = () => {
    if (isLoading) {
      return <p>Loading</p>; // 스피너로 변환
    }
    if (error) {
      return <p>Error : {error}</p>;
    }
    if (data.length !== 0) {
      return data.articles.map((content) => {
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
  return <S.TableListWrap>{renderContent()}</S.TableListWrap>;
};

export default TableList;
