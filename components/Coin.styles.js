import styled from "styled-components";


export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
  }
`;

export const NameCol = styled.div`
  display: flex;
  align-items: center;
`;

export const CoinIcon = styled.div`
  width: 1.8rem;
  margin-right: 1rem;
`;

export const Primary = styled.div`
  margin-bottom: 0.1rem;
`;

export const Secondary = styled.div`
  color: #8a919e;
  font-size: 0.8rem;
`;
