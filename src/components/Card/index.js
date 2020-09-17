import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    color: #3f3f3f;
    padding: 12px 18px 18px 18px;
    background-color: #ffffff;
    box-sizing: border-box;
    
    &.card + &.card {
      margin-top: 18px;
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