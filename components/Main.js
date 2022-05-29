import Portfolio from "./Portfolio";
import Promos from "./Promos";

import { Wrapper } from "./Main.styles";


const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
  return (
    <Wrapper>
      <Portfolio
        walletAddress={walletAddress}
        sanityTokens={sanityTokens}
        thirdWebTokens={thirdWebTokens}
      />
      <Promos />
    </Wrapper>
  );
};

export default Main;
