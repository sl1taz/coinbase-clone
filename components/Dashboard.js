import { useEffect, useState } from "react";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Main from "./Main";

import { Wrapper, MainContainer } from "./Dashboard.styles";


const Dashboard = ({ address }) => {
  const [sanityTokens, setSanityTokens] = useState([]);
  const [thirdWebTokens, setThirdWebTokens] = useState([]);

  
  useEffect(() => {
    const SANITY_URL = "";

    const getCoins = async () => {
      try {
        const coins = await fetch(SANITY_URL);
        const tempSanityTokens = await coins.json();
        setSanityTokens(tempSanityTokens.result);
      } catch (err) {
        console.error(err);
      }
    };
    return getCoins();
  }, []);

  useEffect(() => {
    const PROVIDER_ADDR = "";

    if (sanityTokens) {
      const sdk = new ThirdwebSDK(
        new ethers.Wallet(
          process.env.NEXT_PUBLIC_METAMASK_PRIVATE_KEY,
          ethers.getDefaultProvider(PROVIDER_ADDR)
        )
      );

      sanityTokens.map((tokenItem) => {
        const currentToken = sdk.getTokenModule(tokenItem.contractAddress);
        setThirdWebTokens((prevState) => [...prevState, currentToken]);
      });
    }
  }, [sanityTokens]);

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

export default Dashboard;
