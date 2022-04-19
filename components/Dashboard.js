import Header from "./Header";
import Main from "./Main";

import Sidebar from "./Sidebar";

import styled from "styled-components";


const Dashboard = () => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header />
        <Main />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
  overflow: hidden;
`;

const MainContainer = styled.div`
  flex: 1;
`;

export default Dashboard;
