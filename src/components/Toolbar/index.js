import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import Copy from './icons/copy_24'
import CreateContent from './icons/create-content_24'
import CreateNewFolder from './icons/create-new-folder_24'
import Cut from './icons/cut_24'
import Paste from './icons/paste_24'
import Pencil from './icons/pencil_24'
import Star from './icons/star_24'
import StartLocalization from './icons/start-localization-workflow_24'
import StartPublication from './icons/start-publication-workflow_24'
import Trash from './icons/trash-bin_24'
import Upload from './icons/upload_24'
import Withdraw from './icons/withdraw_24'

export const DIVIDER = 'DIVIDER';

const mainColor = '#787878';

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
  li {
    display: inline-block;
    
    &.divider {
      margin: 0 6px;
      width: 1px;
      height: 26px;
      background-color: #bcbcbc;
    }
  }
  
  li + li {
    margin-left: 3px;
    
    &.divider {
      margin: 0 6px 0 9px;
    }
  }
  
  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 42px;
    height: 42px;
    padding: 0;
    color: ${mainColor};
    border-radius: 4px;
    
    &:hover {
      //background-color: rgba(0,0,0,.1);
      color: #3f3f3f;
      border-radius: 42px;
      background-color: #D6F0FF;
    }
    
    &:focus {
      outline: none;
    }
    
    &:active {
      background-color: #3f3f3f;
      color: #ffffff;
    }
    
    &.disabled {
      color: #d2d2d2;
      
      &:hover {
        background-color: inherit;
        color: #d2d2d2;
        cursor: default;
      }
    }
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const Toolbar = ( props ) => {

  const actions = [
    <CreateNewFolder />,
    <CreateContent />,
    <Upload disabled/>,
    DIVIDER,
    <Cut />,
    <Copy />,
    <Paste />,
    DIVIDER,
    <Pencil/>,
    DIVIDER,
    <Star/>,
    DIVIDER,
    <StartPublication/>,
    <StartLocalization/>,
    <Withdraw/>,
    DIVIDER,
    <Trash/>
  ]

  return (
    <Ul {...props}>
      {actions.map((action, index) => {
        return action === DIVIDER
          ? (
            <li key={index} className="divider" />
          )
          :  (
            <li key={index}><button className={classNames({ disabled: action.props.disabled })}>{action}</button></li>
          )
        }
      )}
    </Ul>
  )
}

export default Toolbar;