import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Div = styled.div`
    border-radius: 8px;
    width: 100%;
    max-width: 100%;
    color: #3f3f3f;
    padding: 12px 18px 18px 18px;
    //background-color: rgba(255,255,255, .8);
    //background-color: #e7e7e7;
    background-color: #ffffff;
    box-sizing: border-box;
    
    &.table {
      padding: 12px 0;
    }
    
    &.card + &.card {
      margin-top: 18px;
    } 
    
    h2 {
      margin: 6px 0 24px 0;
      color: #006cae;
      font-size: 17px;
      font-weight: 400;
      
      &.title {
        margin: 6px 0 24px 0;
      }
    }
`;

const Card = ({ table, children, height, ...props }) => {
  return (
    <Div className={classNames('card', { table })} {...props} style={{ height: `${height}px`}}>
      {children}
    </Div>
  )
}

export default Card;