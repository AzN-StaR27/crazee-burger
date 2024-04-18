import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup component={CasinoEffectStyled}>
      <CSSTransition classNames={"count-animated"} timeout={300} key={count}>
        <span className={className}>{count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow: hidden;
  span {
    display: inline-block;
  }

  /* MOUNTING */
  .count-animated-enter {
    transform: translateY(100%);
  }

  .count-animated-enter-active {
    transition: 300ms;
    transform: translateY(0%);
  }

  /* UNMOUNTING */
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .count-animated-exit-active {
    transition: 300ms;
    transform: translateY(-100%);
  }
`;
