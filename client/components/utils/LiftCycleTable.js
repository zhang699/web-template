import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import radium from 'radium';
import DatePicker from './DatePicker';
import Table from './Table';
/* 因需綁定addEventListener 而改變內容後 listener會消失  所以須使用componentDidMount再次添加*/
class LifeCycleTable extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.bindClick();
  }
  bindClick = () => {
    const tdCollection = Array.prototype.slice.call(this.refs.container.children[1].children[0].children[1].children)
    tdCollection.forEach((td) => {
      td.addEventListener('click', () => {
        this.props.context.setState({ selected: td })
        this.props.context.setState({ stage: false });
      })
    });
  }
  tbody = () => {
    return (
      [
        ['2017/07/30',1, '7,800', 'USD', 'hi'],
        ['2017/07/30',1, '3,200', 'NTD', 'hi'],
      ]
    )
  }
  render() {
    return (
      <div ref='container' style={style.container}>
        <div style={style.searchRow}>
          <div style={style.searchFieldWrapper}>
            <DatePicker onSearchClick={() => alert(123)} onSearchWordChange={(val) => console.log(val)} />
          </div>
          <div style={style.serachWordingWrapper}>
            至
          </div>
          <div style={style.searchFieldWrapper}>
            <DatePicker onSearchClick={() => alert(123)} onSearchWordChange={(val) => console.log(val)} showBtn />
          </div>
        </div>
        <Table
          column1Style={{marginTop:'5px'}}
          style={{marginTop: '100px',marginLeft: '50px'}}
          thStyle={['100px','170px', '200px', '205px','205px']}
          tableHead={['日期','參考編號', '總額單位', '付款幣別', '詳細資訊']}
          tableBody={this.tbody()}
        />
      </div>
    );
  }
}
const style = {
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'borderBox',
    width: '100%',
    minHeight: '100%',
  },
  icon: {
    width: '20px',
    height: '20px',
    border: 'solid 1px #1f4b54',
    marginRight: '60px',
    marginLeft: '10px',
    marginTop: '5px'
  },
  searchRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  searchFieldWrapper: {
    width: '21%',
    height: '33px',
  },
  serachWordingWrapper: {
    fontSize: '12px',
    color: '#368e9f',
    margin: '0 10px',
  },
  displayRight: {
    flex: 6,
    backgroundColor: '#fff',
    color: '#1f4b54',
    height: '18px',
    lineHeight: '18px',
    fontSize: '12px',
    padding: '4px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '0px 2px 2px 0px',
    border: 'solid 1px #1f4b54',
  },
  displayWrapper: {
    display: 'flex',
    boxSizing: 'border-box',
    width: '288px',
    height: '28px',
    margin: '22.5px 2.4%'
  },
  p: {
    color: '#6db9c7',
    marginTop: '30px'
  },
  btn: {
    background: 'white',
    width: '250px',
    height: '32px',
    color: '#c24e30',
    textAlign: 'center',
    lineHeight: '28px',
    border: '2px solid #c24e30',
    marginTop: '50px',
    marginLeft: '350px',
    ':hover': {
      background: '#e56949',
      color: 'white'
    }
  },
};
LifeCycleTable.propTypes = {
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {
})(radium(LifeCycleTable));
