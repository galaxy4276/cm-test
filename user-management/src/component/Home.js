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
      <p>사용자 추가에서 사용자를 추가하고, 사용자 관리에서 사용자를 관리할 수 있습니다.</p>
      <div className='footer'>
        <FcAssistant />
        <span>오류 관련 문의</span>
        <a href="http://www.github.com/galaxy4276">http://www.github.com/galaxy4276</a>
      </div>
    </StyledContentWrapper>
  );
};


export default Home;