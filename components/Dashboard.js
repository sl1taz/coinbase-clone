import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

import styled from "styled-components";


const providerAddr =
  "https://eth-rinkeby.alchemyapi.io/v2/cn_acNi0fNgrewJVlCanxDL4frdvW9iB";

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
    ethers.getDefaultProvider(providerAddr)
  )
);

const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  useEffect(() => {
    const url =
      "https://exkic33q.api.sanity.io/v1/data/query/production?query=*%5B_type%3D%3D'coins'%5D%20%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D";

    const getSanityAndThirdWebTokens = async () => {
      const coins = await fetch(url);
      const sanityTokens = (await coins.json()).result;

      setSanityTokens(sanityTokens);
      setThirdWebTokens(
        sanityTokens.map((token) => sdk.getTokenModule(token.contractAddress))
      );
    };
    getSanityAndThirdWebTokens();
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
        <Main
          walletAddress={address}
          sanityTokens={sanityTokens}
          thirdWebTokens={thirdWebTokens}
        />
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
