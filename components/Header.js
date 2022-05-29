import { useRouter } from "next/router";
import Modal from "react-modal";
import Link from "next/link";

import TransferModal from "./modal/TransferModal";

import {
  Wrapper,
  Title,
  ButtonsContainer,
  Button,
  WalletLink,
  WalletLinkTitle,
  WalletAddress,
} from "./Header.styles";


Modal.setAppElement("#__next");

const Header = ({
  walletAddress,
  sanityTokens,
  thirdWebTokens,
  connectWallet,
}) => {
  const router = useRouter();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#0a0b0d",
      padding: 0,
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(10, 11, 13, 0.75)",
    },
  };

  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        {walletAddress ? (
          <WalletLink>
            <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
            <WalletAddress>
              {walletAddress.slice(0, 7)}...{walletAddress.slice(35)}
            </WalletAddress>
          </WalletLink>
        ) : (
          <Button onClick={() => connectWallet("injected")}>
            Connect Wallet
          </Button>
        )}
        <Button style={{ background: "#3773f5", color: "#000" }}>
          Buy / Sell
        </Button>
        <Link href={"/?transfer=1"} passHref={true}>
          <Button>Send / Receive</Button>
        </Link>
      </ButtonsContainer>

      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <TransferModal
          thirdWebTokens={thirdWebTokens}
          sanityTokens={sanityTokens}
          walletAddress={walletAddress}
        />
      </Modal>
    </Wrapper>
  );
};

export default Header;
