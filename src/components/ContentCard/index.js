import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import classNames from 'classnames'
import mockData from './MOCK_DATA.json'
import SearchIcon from './search_16'
import Remove from './remove-small'
import Arrow from './up-and-down-arrows-triangles-svgrepo-com'
import VerticalDots from './vertical-dots-16'
import Toolbar from '../Toolbar'
import iconArticle from './type-article_24.svg'
import iconTeaser from './type-teaser_24.svg'
import iconPicture from './type-picture_24.svg'
import iconPage from './type-page_24.svg'
import ReactPaginate from 'react-paginate';

const itemsPerPage =  10;

const Div = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    margin: 0 30px;
    height: 36px;
    
    .switch {
      display: flex;
      align-items: center;
      grid-gap: 12px;
      
      select {
        padding: 0 12px;
        height: 34px;
        border: none;
        background-color: #e7e7e7;
        border-radius:  16px;
        
        &:focus {
          outline: none;
        }
      }
    }    
    
    .switch label {
      display: flex;
      align-items: center;
      grid-gap: 12px;
    }
  }
  
  .scroll-container {
    height: 773px;
    overflow-y: scroll;
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

    .type-icon {
      width: 24px;
      height: 24px;
    }
    
    td:first-child {
      font-size: 13px;
      
      strong {
        font-size: 13px;
        //letter-spacing: 0.2px;
      }  
    }
    
 
    tr {
      cursor: pointer;

      &:hover {
        background-color: #D6F0FF;
        
        button {
          opacity: 1;
        }
      }
      
      &.selected {
      background-color: #F8DEFF;
      }
      
      &:nth-child(odd) {
        //background-color: rgba(246,246,246,.7);
      }
    }
    
    td {
      padding: 18px 9px;
      line-height: 24px;
    
      &:first-child {
        padding-left: 30px;
      }
      
      &.name {
        width: 70%; 
      }
    
      &.type {
        width: 24px;
        > div {
          display: flex;
          align-items: center;
          align-content: stretch;
          grid-gap: 18px;
          height: 100%;
        }
              
        svg {
          font-size: 19px;
        }
      }
      
      &:last-child {
        padding-right: 30px;
        
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

const Pagination = styled.div`
  margin: 42px 60px 18px; 
  
  a {   
    user-select: none;
    color: #868686;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    
    &:focus {
      outline: none;
    }
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    
    li {
      display: inline-flex;
      width: 24px;
      height: 24px;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      cursor: pointer;
      
           
      &:hover {
        background-color: #e7e7e7;
        
        a {
          color: #3f3f3f;
        }
      }
      
      &.selected {
        font-weight: bold;   
        border-bottom: solid 2px #006cae;
        border-radius: 0;
        cursor: default;
        
        &:hover {
          background-color: transparent;
        }
        
        a {
          color: #3f3f3f;
          cursor: default;
          
          &:hover {
            color: #3f3f3f;
          }
        }
      }
      
      &.disabled, &.break {
        cursor: default;
        background-color: transparent;
  
        a { 
          color: #d2d2d2; 
        }
      }
    }
  }
`;

const StyledToolbar = styled(Toolbar)`
  margin: 24px 0 0 21px;
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

const TextSearch = ({ searchTerm, setSearchTerm }) => {

  const [expanded, toggle] = React.useState(true);
  const input = React.useRef();

  React.useEffect(() => {
    if (expanded) {
      input.current.focus();
    }
  })

  const close = () => {
    toggle(false);
    setSearchTerm('');
  }

  const handleChange = event => {
    setSearchTerm(event.target.value);
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
        <input type="text" placeholder="Search …" value={searchTerm} onChange={handleChange} ref={input} onKeyDown={handleExit}/>
        <Remove onClick={close} />
      </div>
    </SearchContainer>
  )
}

const typeToIcon = {
  'Article': iconArticle,
  'Picture': iconPicture,
  'Teaser': iconTeaser,
  'Page': iconPage
}

const Icon = ({ type }) => {

  const icon = typeToIcon[type];
  if (!icon) return '';

  return <div><img src={icon} className={'type-icon'} alt={`Type ${type}`} title={`Type ${type}`}/></div>
};

const ContentCard = ({ length, type = 0, filter = false, bucket = 0, toolbar = false }) => {

  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selected, setSelected] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);

  // Effect: Shuffle data and select
  React.useEffect(() => {
    shuffle(mockData);
    //let slice = mockData.slice(0, length);
    //setData(slice);
    setData(mockData);
    setFilteredData(mockData);
  }, [length, bucket, type]);

  // Filter and paginate data
  React.useEffect(() => {
    if (searchTerm === '') {
      // Paginate
      setPageCount(data.length / itemsPerPage);
      const offset = currentPage * itemsPerPage;
      setFilteredData(data.slice(offset, offset + itemsPerPage));
    } else {
      setFilteredData(data.filter(datum => datum.name.includes(searchTerm)));
      setPageCount(-1);
    }
  }, [searchTerm, data, currentPage]);

  const toggleSelection = index => {
    // Off
    if (selected.includes(index)) {
      setSelected(selected.filter(v => v !== index));
    }
    // On
    else {
      setSelected([...selected, index]);
    }
  }

  const handlePageChange = event => {
    setCurrentPage(event.selected);
  }

  return (
    <Card table height={900}>
      <Div>
        <div className="title">
          <h2>Content</h2>
          <TextSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </div>
        {toolbar && <StyledToolbar />}
        <div className={'scroll-container'}>
          <Table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Name <Arrow /></th>
                <th>Status <Arrow /></th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
            {filteredData.map((datum, index) => (
              <tr key={index} className={classNames({ selected: selected.includes(index)})} onClick={() => toggleSelection(index)}>
                <td className="type"><Icon type={datum.type}/></td>
                <td className={'name'}>{datum.name}</td>
                <td>{datum.status}</td>
                <td><More /></td>
              </tr>
            ))}
            </tbody>
          </Table>
          {pageCount >= 0 && <Pagination>
            <ReactPaginate pageCount={pageCount}
                           pageRangeDisplayed={12}
                           marginPagesDisplayed={3}
                           nextLabel={'>'}
                           previousLabel={'<'}
                           onPageChange={handlePageChange}
                           forcePage={currentPage}
            />
          </Pagination>}
        </div>
      </Div>
    </Card>
  )
}

export default ContentCard