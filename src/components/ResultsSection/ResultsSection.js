import React from 'react';
import ResultsList from './ResultsList/ResultsList';
import ResponseError from '../ResponseError/ResponseError';
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

export default class ResultSection extends React.Component {
  constructor(props) {
    super(props)
    this.whatToRender = this.whatToRender.bind(this);
  }

  whatToRender() {
    if (this.props.notFound) return <ResponseError responseStatus={this.props.responseStatus}/>
    else {
      return (
        <ResultsList response={this.props.response} 
                     selectItem={this.props.selectItem}/>
      )
    }
  }

  render() {
    return(
      <Wrapper>
        {this.props.firstLaunch ? null : this.whatToRender()}
      </Wrapper>
    )
  }
}