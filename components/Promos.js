import {
  Wrapper,
  OfferCard,
  Title,
  Description,
  Placeholder,
  Additional,
} from "./Promos.styles";


const Promos = () => {
  return (
    <Wrapper>
      <OfferCard>
        <Title>Yield earned</Title>
        <Description>Earn up to 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ fontSize: "1.5rem" }}>$0.000066 2.84% APY</Additional>
      </OfferCard>
      <OfferCard>
        <Title>Learn and earn</Title>
        <Description>Earn up to 2.84% APY on your crypto</Description>
        <Placeholder />
        <Additional style={{ color: "#3773f5" }}>Verify Identity</Additional>
      </OfferCard>
    </Wrapper>
  );
};

export default Promos;
