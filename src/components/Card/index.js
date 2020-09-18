import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 12px;
    align-content: flex-start;
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
    color: #3f3f3f;
    padding: 12px 18px 24px 18px;
    //background-color: rgba(255,255,255, .8);
    //background-color: #e7e7e7;
    background-color: #ffffff;
    box-sizing: border-box;
    
    transition: height 200ms ease-in-out;
    
    &.table {
      padding: 12px 0;
    }
    
    &.card + &.card {
      margin-top: 18px;
    } 
    
    h2 {
      margin: 6px 0 12px 0;
      color: #006cae;
      font-size: 21px;
      font-weight: 400;
    }
    
    h3 {
      margin: 12px 0 0 0;
      font-size: 21px;
      color: #006cae;
      font-weight: 400;
    }
`;

const Card = ({ table, children, height, ...props }) => {

  const style = {};
  if (height) {
    style.height = `${height}px`;
  }

  return (
    <Div className={classNames('card', { table })} {...props} style={style}>
      {children}
    </Div>
  )
}

export default Card;