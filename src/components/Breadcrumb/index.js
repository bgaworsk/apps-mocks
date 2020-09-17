import React from 'react'
import styled from 'styled-components'
import Arrow from './breadcrumb-arrow-right_16'

const Div = styled.div`
  min-height: 42px;
  height: 42px;
  width: 100%;
  background-color: #ffffff;
  color: #3f3f3f;
  font-size: 13px;
  
  ul {
    margin: 13px 0 0 21px;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    grid-gap: 9px;
    align-content: center;
    
    li {
      padding: 0;
      display: inline-block;
    }
    
    li.arrow {
      width: 16px;
      height: 16px;
    }
    
    li:last-child {
      color: #006cae;
    }
  }
`;

const Breadcrumb = () => {
  return (
    <Div>
      <ul>
        <li>Campaigns</li>
        <li className="arrow"><Arrow /></li>
        <li>Bi-weekly Homepage Campaign w/c 3.9. 2020</li>
      </ul>
    </Div>
  )
}

export default Breadcrumb;