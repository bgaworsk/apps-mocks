import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import VerticalDots from './vertical-dots-16'
import classNames from 'classnames'
import mockData from './MOCK_DATA.json'
import searchIcon from './search_16.svg'

const Div = styled.div`

  .filter {
    text-align: center;
  }

  .field {
    position: relative;
    
    input {
      background-color: #ffffff;
      height: 24px;
      border-radius: 24px;
      width: 70%;
      border: none;
      font-size: 13px;
      margin-bottom: 6px;
      padding-left: 28px;
      box-sizing: border-box;
      
      &:focus {
        outline: none;
      }
    }
    
    img {
      position: relative;
      left: 21px;
      top: 3px;
      
      width: 16px;     
      height: 16px;
    }  
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  
  th {
    font-size: 19px;
    font-weight: 400;
    text-align: left;
    padding: 6px 9px 12px;
    
    &:first-child {
      padding-left: 30px;
    }
    
    &:last-child {
      padding-right: 30px;
      width: 16px;
    }
  }
  
  tbody {
    font-size: 15px;
 
    tr {
      cursor: pointer;
    }
    
    tr:nth-child(odd) {
      background-color: rgba(246,246,246,.7);
    }
    
    td {
      padding: 12px 9px;
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
        
        button {
          cursor: pointer;
          border: none;
          background-color: transparent;
          width: 24px;
          height: 24px;
          padding: 0;
          color: #868686;
          border-radius: 4px;
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
      }
    }
    
    tr:hover {
      button {
        opacity: 1;
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

const TableCard = ({ length }) => {

  const [search, setSearch] = React.useState('');

  shuffle(mockData);
  const data = mockData.slice(0, length);

  return (
    <Div>
      <div className="filter">
        <div className="field">
          <img src={searchIcon} alt="Search" />
          <input type="text" placeholder="Search …" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
      </div>
      <Card table height={565}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
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
      </Card>
    </Div>
  )
}

export default TableCard