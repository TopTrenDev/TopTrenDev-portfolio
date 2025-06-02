/*
   Copyright (C), 2023-2025, Marek Dvojak
   Author: Marek Dvojak
   FileName: MarqueeCards.tsx
   Version: 2.3.0
   Creation: 02/06/2023
   Last modification: 27/04/2025
*/
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

