import styled from "styled-components";
import { HistoryColorType } from './AboutUsSection';

 type Props = {
  historyColor: HistoryColorType
}

const Main = styled.div`
height: auto; 
width: 100%;
padding-top: 2rem;
`;

const content = styled.div`
  font-size: 1.125rem;
  font-family: 'Poppins';
  opacity: 0.8;
`;

const Rippleposition = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  height: clamp(28rem, 45vw, 30rem);
`;

const Cardone = styled.div<Props>`
border-radius: 0.75rem;
background-color: ${({historyColor})=> historyColor.backgroundColorCardone};
color: ${({historyColor})=> historyColor.textColor};
padding: 2rem;
margin: 2rem;
width: 100%;
height: auto;
`;

const Cardsecond = styled.div<Props>`
border-radius: 0.75rem;
background-color: ${({historyColor})=> historyColor.backgroundColorCardtwo};
color: ${({historyColor})=> historyColor.textColor};
padding: 2rem;
margin: 2rem;
width: 100%;
height: auto;
`;

export const Styled = {
  Main,
  content,
  Rippleposition,
  Cardone,
  Cardsecond,
};


const rippleAnimationLength = "5s";
const rippleAnimationDelay = "150ms";

const RippleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Ripple = styled.div`
  position: absolute;
  border-radius: 50%;
  color: transparent;
  transform-origin: center;

  @media (max-width: 425px) {
    ${Array.from({ length: 4 }, (_, i) => {
      const index = i + 1;
      const width = `calc(332px - (44px * ${index}))`;
      const height = `calc(332px - (44px * ${index}))`;
      const animationName = `ripple${index}`;
      const animationDelay = `calc(1000ms - (${rippleAnimationDelay} * ${index}))`;

      return `
        &:nth-child(${index}) {
          width: ${width};
          height: ${height};
          animation: ${animationName} ${rippleAnimationLength} infinite ease-in-out;
          animation-delay: ${animationDelay};
        }
      `;
    })}
  }

  @media (min-width: 426px) {
    ${Array.from({ length: 4 }, (_, i) => {
      const index = i + 1;
      const width = `calc(432px - (84px * ${index}))`;
      const height = `calc(432px - (84px * ${index}))`;
      const animationName = `ripple${index}`;
      const animationDelay = `calc(1000ms - (${rippleAnimationDelay} * ${index}))`;

      return `
        &:nth-child(${index}) {
          width: ${width};
          height: ${height};
          animation: ${animationName} ${rippleAnimationLength} infinite ease-in-out;
          animation-delay: ${animationDelay};
        }
      `;
    })}
  }

  @media (min-width: 1025px) {
    ${Array.from({ length: 4 }, (_, i) => {
      const index = i + 1;
      const width = `calc(400px - (84px * ${index}))`;
      const height = `calc(400px - (84px * ${index}))`;
      const animationName = `ripple${index}`;
      const animationDelay = `calc(1000ms - (${rippleAnimationDelay} * ${index}))`;

      return `
      &:nth-child(${index}) {
        width: ${width};
        height: ${height};
        animation: ${animationName} ${rippleAnimationLength} infinite ease-in-out;
        animation-delay: ${animationDelay};
      }
    `;
    })}
  }
  @media (min-width: 1440px) {
    ${Array.from({ length: 4 }, (_, i) => {
      const index = i + 1;
      const width = `calc(450px - (84px * ${index}))`;
      const height = `calc(450px - (84px * ${index}))`;
      const animationName = `ripple${index}`;
      const animationDelay = `calc(1000ms - (${rippleAnimationDelay} * ${index}))`;

      return `
      &:nth-child(${index}) {
        width: ${width};
        height: ${height};
        animation: ${animationName} ${rippleAnimationLength} infinite ease-in-out;
        animation-delay: ${animationDelay};
      }
    `;
    })}
  }
`;

const RippleOne = styled(Ripple)<Props>`
  background-color: ${({historyColor})=> historyColor.riplecolorone};
  opacity: 0.2;
`;

const RippleTwo = styled(Ripple)<Props>`
  background-color: ${({historyColor})=> historyColor.riplecolortwo};
  opacity: 0.2;
`;

const RippleThree = styled(Ripple)<Props>`
  background-color: ${({historyColor})=> historyColor.riplecolorthree};
  opacity: 0.1;
`;

const RippleFour = styled(Ripple)<Props>`
  background-color: ${({historyColor})=> historyColor.riplecolorfour};
  opacity: 0.1;
`;

type RippleProps = {
  historyColor: HistoryColorType
}

const RippleAnimation = ({historyColor}: RippleProps) => {
  return (
    <RippleContainer>
      <RippleOne historyColor={historyColor}/>
      <RippleTwo historyColor={historyColor}/>
      <RippleThree historyColor={historyColor}/>
      <RippleFour historyColor={historyColor}/>
    </RippleContainer>
  );
};

export default RippleAnimation;
