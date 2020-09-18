import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import VerticalDots from './vertical-dots-16'
import classNames from 'classnames'
import mockData from './MOCK_DATA.json'
import SearchIcon from './search_16'
import Remove from './remove-small'
import Arrow from './up-and-down-arrows-triangles-svgrepo-com'

const Div = styled.div`

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
    width: 24px;
    height: 24px;
    padding: 0;
    color: #767676;
    border-radius: 24px;
    opacity: 0;
    
    &:hover {
      background-color: rgba(0,0,0,.1);
      color: #3f3f3f;
    }
    
    &:focus {
      outline: none;
    }
    
    &.pressed {
      background-color: #3f3f3f;
      color: #ffffff;
    }
  } 
  
  .title {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    margin: 0 30px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  margin-top: 24px;
  
  td {
    border-top: solid 1px #d2d2d2;  
  }
  
  th {
    font-size: 13px;
    text-align: left;
    padding: 6px 9px 12px;
    color: #868686;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    cursor: pointer;
    
    &:hover {
      color: #3f3f3f;
      svg {
        color: #868686;
      }
    }
    
    &:first-child {
      padding-left: 30px;
    }
    
    &:last-child {
      padding-right: 30px;
      width: 16px;
    }
    
    svg {
      position: absolute;
      top: 6px;
      margin-left: 12px;    
      width: 14px;
      height: 14px;
      color: #ffffff;
    }
  }
  
  tbody {
    font-size: 15px;
 
    tr {
      cursor: pointer;
    }
 
    
    tr:nth-child(odd) {
      //background-color: rgba(246,246,246,.7);
    }
    
    td {
      padding: 18px 9px;
      line-height: 24px;
    
      &:first-child {
        width: 50%;
        padding-left: 30px;
      }
      
      &:last-child {
        padding-right: 30px;
        width: 16px;
        
        svg {
          width: 16px;
          height: 16px;
        }
      }
    }
    
    tr:hover {
      button {
        opacity: 1;
      }
    }
  }
`;

const SearchContainer = styled.div`
  flex-grow: 2;    
  display: flex;
  justify-content: flex-end;
  align-items: center;  

  .field {
    position: relative;
    box-sizing: border-box;
    width: 24px;
    max-width: 600px;
    transition: width .4s ease-in-out;
    overflow: hidden;
    
    svg {
      width: 24px;     
      height: 24px;
      color: #868686;
      cursor: pointer;
      transition: width 0.4s ease-in-out;
      
      &:hover {
        color: #3f3f3f;
      }
      
      &:last-child {
        display: none;
      }
    }
    
    &.expanded {
      width: 100%;
      
      svg {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 12px;
        top: 10px;
        margin: 0;
        cursor: default;
        
        &:hover {
         color: #868686;
        }
        
        &:last-child {
          display: block;
          width: 16px;
          height: 16px;
          position: absolute;
          left: unset;
          right: 12px;
          top: 10px;
          margin: 0;
          
          color: #ffffff;
          cursor: pointer;
          background-color: #bcbcbc;
          border-radius: 8px;
          
          &:hover {
            background-color: #868686;
          }
        }
      }
      
      input {
        background-color: #e7e7e7;
        display: block;
      }  
    }
        
    input {
      display: none;
      top: 0;
      left: 0;    
      height: 36px;
      border-radius: 18px;
      width: 100%;
      border: none;
      font-size: 15px;
      padding-left: 42px;
      box-sizing: border-box;      
      
      &:focus {
        outline: none;
      }
    }
  }
`;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const More = () => {

  const [pressed, toggle] = React.useState(false);

  return (
    <button className={classNames({pressed})} onClick={() => toggle(v => !v)}><VerticalDots/></button>
  )
}

const TextSearch = () => {

  const [expanded, toggle] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const input = React.useRef();

  React.useEffect(() => {
    if (expanded) {
      input.current.focus();
    }
  })

  const close = () => {
    toggle(false);
    setSearch('');
  }

  const handleChange = event => {
    setSearch(event.target.value);
  }

  const handleExit = event => {
    if (event.keyCode === 27) {
      close();
    }
  }

  return (
    <SearchContainer>
      <div className={classNames('field', { expanded })}>
        <SearchIcon onClick={() => toggle(true)}/>
        <input type="text" placeholder="Search …" value={search} onChange={handleChange} ref={input} onKeyDown={handleExit}/>
        <Remove onClick={close} />
      </div>
    </SearchContainer>
  )
}

const TableCard = ({ length }) => {

  shuffle(mockData);
  const data = mockData.slice(0, length);

  return (
    <Card table>
      <Div>
        <div className="title">
          <h2>Localization Workflows</h2>
          <TextSearch />
        </div>
        <Table>
          <thead>
            <tr>
              <th>Name <Arrow /></th>
              <th>Type <Arrow /></th>
              <th>Status <Arrow /></th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
          {data.map((datum, index) => (
            <tr key={index}>
              <td>{datum.name}</td>
              <td>{datum.type}</td>
              <td>{datum.status}</td>
              <td><More /></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Div>
    </Card>
  )
}

export default TableCard