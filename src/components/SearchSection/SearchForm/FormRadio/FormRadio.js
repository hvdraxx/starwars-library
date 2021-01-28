import React from 'react';
import { RadioButton } from './RadioButton/RadioButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 120px;
  margin-bottom: 30px;

  @media all and (max-width: 1440px) {
    padding: 0 25px;
  }

  @media all and (max-width: 1024px) {
    padding: 0 75px;
    margin-bottom: 1.2vw;
  }

  @media all and (max-width: 425px) {
    padding: 0 25px;
    margin-bottom: 8px;
  }
`

export const FormRadio = (props) => {
  return(
    <Wrapper>
      <RadioButton value='people' handleOption={props.handleOption} checked/>
      <RadioButton value='planets' handleOption={props.handleOption}/>
      <RadioButton value='starships' handleOption={props.handleOption}/>
    </Wrapper>
  )
}