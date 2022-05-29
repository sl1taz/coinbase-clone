import styled from "styled-components";


export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 100%;
`;
export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`;

export const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`;

export const Balance = styled.div``;

export const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`;

export const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0.5rem 0;
`;

export const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`;

export const TableItem = styled.div`
  padding: 1rem 2rem;
`;

export const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
