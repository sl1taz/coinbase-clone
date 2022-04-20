import Portfolio from "./Portfolio";
import Promos from "./Promos";

import styled from 'styled-components';


const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Promos />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  
  ::-webkit-scrollbar {
    display: none;
  }

  & div {
    border-radius: 0.4rem;
  }
`;

export default Main;
