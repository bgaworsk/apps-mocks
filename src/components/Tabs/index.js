import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Div = styled.div`
  padding: 0 18px;
  //border-bottom: solid 1px rgba(255,255,255,.3);
  background-color: rgba(0,0,0,.2);
  
  > div {
    width: 100%;
    max-width: 100%;
    font-size: 15px;
    margin: 12px auto 0;
    
    /*li {
      display: none;
    }*/
  }
  
  ul {
    margin: 0;
    padding: 0;
    //display: none;
  
    li {
      display: inline-block;
      padding: 0 18px 12px;   
      cursor: pointer;
      user-select: none;
      color: #d2d2d2;
  
      &:hover {
        color: #ffffff;
      }
    }
    
    li.active {
      border-bottom: solid 3px rgba(255,255,255,1);
      font-size: 15px;
      color: #ffffff;
    }
    
    li + li {
      margin-left: 36px;
    }
  }
`;

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <Div>
      <div>
        <ul>
          {tabs.map((tab, index) => (
            <li key={index} onClick={() => setActiveTab(index)} className={classNames({ active: activeTab === index })}>{tab}</li>
          ))}
        </ul>
      </div>
    </Div>
  )
}

export default Tabs;