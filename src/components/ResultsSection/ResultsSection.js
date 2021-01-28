import React from 'react';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ResultsList } from './ResultsList/ResultsList';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 31%;

  @media all and (max-width: 1024px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    width: 100%;
    heigh: 100vh;
  }
`

export const ResultsSection = (props) => {
  return (
    <Wrapper>
        <TransitionGroup component={null}>
          {props.transition && (
            <CSSTransition classNames="results" timeout={500}>
              <ResultsList items={props.items} selectItem={props.selectItem} showItem={props.showItem}/>
            </CSSTransition>
          )}
        </TransitionGroup>
    </Wrapper>
  )
}