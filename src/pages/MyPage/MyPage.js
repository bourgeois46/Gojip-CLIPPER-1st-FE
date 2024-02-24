import React from "react";
import "./MyPage.css";

function MyPage() {
  return (
    <div className="myPage">
      <div className="my-column">
        <div className="my-row">
          <div className="my-name">고집불통</div>
          <div className="my-name-unit">님</div>
        </div>
        <div className="my-hi">안녕하세요~</div>
        <div className="my-line1"/>

        <div className="my-email">이메일</div>
        <div className="my-email-detail">gojip123@naver.com</div>

        <div className="my-collection">컬렉션 추가/수정</div>


        <div className="my-line2"/>

        <div className="my-logout">로그아웃</div>
        <div className="my-withdrawal">탈퇴</div>
      </div>
    </div>
  );
}

export default MyPage;
