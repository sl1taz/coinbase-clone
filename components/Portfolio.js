import { useState, useEffect } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import BalanceChart from "./BalanceChart";
import Coin from "./Coin";

import { coins } from "../assets/js/coins";

import {
  Wrapper,
  Content,
  Chart,
  Balance,
  BalanceTitle,
  BalanceValue,
  PortfolioTable,
  Table,
  TableItem,
  TableRow,
  Title,
  Divider,
} from "./Portfolio.styles";


const Portfolio = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
  const [walletBalance, setWalletBalance] = useState(0);
  const [sender, setSender] = useState(walletAddress);

  
  const getBalance = async (activeTwToken) => {
    const balance = await activeTwToken.balanceOf(sender);
    return parseInt(balance.displayValue);
  };

  useEffect(() => {
    const calculateTotalBalance = async () => {
      setWalletBalance(0);

      sanityTokens.map(async (token) => {
        const currentTwToken = thirdWebTokens.filter(
          twToken => twToken.address === token.contractAddress
        );
        const balance = await getBalance(currentTwToken[0]);
        setWalletBalance(prevState => prevState + balance * token.usdPrice);
      });
    };

    if (sanityTokens.length > 0 && thirdWebTokens.length > 0) {
      calculateTotalBalance();
    }
  }, [thirdWebTokens, sanityTokens]);

  return (
    <Wrapper>
      <Content>
        <Chart>
          <>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>
                {"$"}
                {walletBalance.toLocaleString()}
              </BalanceValue>
            </Balance>
          </>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <div style={{ flex: 3 }}>Name</div>
                <div style={{ flex: 2 }}>Balance</div>
                <div style={{ flex: 1 }}>Price</div>
                <div style={{ flex: 1 }}>Allocation</div>
                <div style={{ flex: 0 }}>
                  <BsThreeDotsVertical />
                </div>
              </TableRow>
            </TableItem>
            <Divider />
            <div>
              {coins.map((coin) => (
                <div key={coin.name}>
                  <Coin coin={coin} />
                  <Divider />
                </div>
              ))}
            </div>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  );
};

export default Portfolio;
