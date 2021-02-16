import styled from "styled-components";
import {Layout} from "antd";

const { Content } = Layout;

const StyledContentWrapper = styled(Content)`
  background-color: white;
  box-shadow: 5px 10px 15px 0 rgba(0, 0, 0, 0.025);
  width: 50rem;
  margin: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .header {
    svg { font-size: 3.5rem; margin-right: 1.2rem; }
    h2 { margin: 0; }
    display: flex; align-items: center; margin-bottom: 1.5rem;
  }
  .footer {
    svg { font-size: 3rem; margin-right: .5rem; }
    span { margin-right: 1rem; }
    margin-top: 10rem; display: flex; align-items: center;
  }
`;

export default StyledContentWrapper;