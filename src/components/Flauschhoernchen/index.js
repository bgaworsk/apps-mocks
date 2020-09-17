import React from 'react'
import styled from 'styled-components'
import flausch from './flauschhoernchen.png'

const Div = styled.div`
  text-align: center;
  
  .shadow {
    margin: auto;
    width: 30%;
    height: 20px;     
    background-color: rgba(0,0,0,.1);
    border-radius: 50%/50%;
  }
`;

const Flauschhoernchen = () => {
  return (
    <Div>
      <img src={flausch} style={{ width: '50vw'}} alt="Flauschhörnchen"/>
      <div className="shadow">&nbsp;</div>
    </Div>
  )
}

export default Flauschhoernchen;