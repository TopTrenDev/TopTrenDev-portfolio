import Marquee from "react-fast-marquee";

interface MarqueeCardsProps {
  children: any;
  direction: any;
}

const MarqueeCards = ({ children, direction }: MarqueeCardsProps) => {
  return (
    <Marquee
      direction={direction}
      gradient={false}
      speed={100}
      pauseOnHover={true}
    >
      {children}
    </Marquee>
  );
};

export default MarqueeCards;

