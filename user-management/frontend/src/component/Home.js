import React from 'react';
import { FcAssistant, FcOk } from 'react-icons/fc';
import StyledContentWrapper from "../common/StyledContentWrapper";

const Home = () => {
  return (
    <StyledContentWrapper>
      <div className='header'>
        <FcOk />
        <h2>사용자 관리 어드민에 어서오세요.</h2>
      </div>
      <p>좌측 사이드 메뉴에서 사용자를 추가하고 관리할 수 있습니다.</p>
      <b>서버 데이터는 json 으로 관리됩니다.</b>
      <div className='footer'>
        <FcAssistant />
        <span>오류 관련 문의</span>
        <a href="http://www.github.com/galaxy4276">http://www.github.com/galaxy4276</a>
      </div>
    </StyledContentWrapper>
  );
};


export default Home;