import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
    color: #3f3f3f;
    padding: 12px 18px 18px 18px;
    background-color: rgba(255,255,255,.7);
    box-sizing: border-box;
    
    &.card + &.card {
      margin-top: 18px;
    } 
    
    h2 {
      margin: 6px 0 24px 0;
      color: #006cae;
      font-size: 17px;
      font-weight: 400;
    }
`;

const Card = ({ children, ...props }) => {
  return (
    <Div className="card" {...props}>
      {children}
    </Div>
  )
}

export default Card;