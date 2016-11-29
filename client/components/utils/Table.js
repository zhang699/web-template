import React from 'react';
import '../../assets/css/table.css';
/**
<Table thStyle={} tableHead={tableHead} tableBody={tableBody}  />
  @thStyle []
  @tableHead []
  @tableBody [[],[],[]....]
  @tIcon
  @column1Style
  @theadStyle
  @rowClick

   1.使用thStyle傳入每個column的寬度
   2.傳入tHead
   3.傳入tBody
   4.如第一個Colume有圖案可使用tIcon傳入，tIcon為一個function return 元素
   5.調整第一個ＣＯＬＵＭＮ的字體使用column1Style
   6.theadStyle
   7.rowClick => 點擊row觸發之事件

  ex:<Table thStyle={['120px', '222px', '320px']} tableHead={[1, 2, 3]} tableBody={[[1, 2, 3],[1, 2, 3],[1, 2, 3]]} />
*/
const style = {
  container: {
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    textAlign: 'center',
    display: 'block',
    background: 'white',
  },
  thead: {
    background: '#1f4b54',
    color: 'white'
  },
  tbody: {
    display: 'block',
    height: '100%',
    width: '100%'
  },
  td: {
    minWidth: '115px',
    height: '55px',
    border: '1px solid #1f4b54',
  },
  th: {
    minWidth: '115px',
    height: '25px',
    border: '1px solid #1f4b54',
  },
}

const tableHeadLogic = (tableHead, thStyle) => {
  const thCollection = [];
  for (let i = 0; i < tableHead.length; i++) {
    thCollection.push(<th key={i} style={{ ...style.th, minWidth: thStyle[i] }}>{tableHead[i]}</th>)
  }
  return thCollection;
};

const tableBodyLogic = (tableBody, thStyle, tIcon, column1Style) => {
  let index = 0;
  let count = 0;
  const tdCollection = [];
  const trCollection = new Array(tableBody.length);
  for (let i = 0; i < tableBody.length; i++) {
    for (let n = 0; n < tableBody[i].length; n++) {
      tdCollection.push(tableBody[i][n]);
    }
  }
  for (let d = 0; d < tdCollection.length; d++) {
    if (typeof trCollection[index] !== 'undefined') {
      trCollection[index].push(<td style={{ ...style.td, minWidth: thStyle[d] }} key={index.toString() + count} > {tdCollection[d]} </td>);
    } else {
      trCollection[index] = ([<td style={{ ...style.td, minWidth: thStyle[d] }} key={index.toString() + count} ><div style={{ display: 'flex', justifyContent: 'center' }}>{ tIcon(tdCollection[d+1]) }<div style={column1Style}>{tdCollection[d]}</div></div></td>]);
    }
    count += 1;
    if (count === tableBody[0].length) {
      index += 1;
      count = 0;
    }
  }
  return trCollection;
}

const concreteTbodyAll = (tableRowsCount, tableBody, thStyle, tIcon, column1Style, rowClick) => {
  const tbody = [];
  for (let i = 0; i < tableRowsCount; i++) {
    tbody.push(<tr onClick={rowClick} className='trStyle' key={100 + i}>{tableBodyLogic(tableBody, thStyle, tIcon, column1Style)[i]}</tr>);
  }
  return tbody;
};


const Table = (props) => {
  const tableHead = props.tableHead || ['日期', '直推獎', '對碰獎', '管理獎', '管理獎', '總額'];
  const tableBody = props.tableBody ||  [[1,'aa',1234,12,12,12],[2,'ss',3445,12,12,12],[3,'rtht',6456,12,12,12],[3,'rtht',6456,12,12,12],[3,'rtht',6456,12,12,12],[3,'rtht',6456,12,12,12],[3,'rtht',6456,12,12,12]];
  const thStyle = props.thStyle;
  const tIcon = props.tIcon || function(){} ;
  const column1Style = props.column1Style;
  const rowClick = props.rowClick || function(){};
  return (
    <div style={ props.style }>
      <table style={style.table}>
        <thead style={props.theadStyle || style.thead }>
          <tr>
            {tableHeadLogic(tableHead, thStyle)}
          </tr>
        </thead>
        <tbody style={style.tbody}>
            {concreteTbodyAll(tableBody.length, tableBody, thStyle, tIcon, column1Style, rowClick)}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  tableHead: React.PropTypes.array,
  tableBody: React.PropTypes.array,
};

export default Table;
