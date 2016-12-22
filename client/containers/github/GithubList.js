import React, {Component} from 'react';
import radium from 'radium';
import {connect} from 'react-redux';
import {fetchGithub} from '../../actions/api/exampleAction';
const styles = {
  titleRow:{
    display:'flex',
    flexDirection:'row',
    fontSize:'18px',
    alignItems:'flex-end',
  },
  repositoryContainer:{
    border:'2px solid #ABC',
    padding:'5px',
    margin:'5px 0px'
  },
  metaInfo:{
    fontSize:'12px',
    display:'flex',
    flexDirection:'row',
    marginBottom:'10px',
    flexWrap:'wrap'
  },
  metaInfoItem:{
    border:'2px solid #CBA',
    fontColor:'white',
    backgroundColor:'#CBA',
    margin:'0px 5px',
    maxHeight:'40px',
    borderRadius:'7px'
  },
  updatedDate:{
    backgroundColor:'#CAC',
    borderColor:'#CAC'
  },
  contentContainer:{
    padding:'5px',
    margin:'5px 5px'
  }
}
class GithubList extends Component {

  componentWillReceiveProps(){
    const {userName} = this.props;
    this.props.fetchGithub({userName});
  }
  render(){
    const {list} = this.props;
    return (
      <div style={styles.contentContainer}>
        {list && list.map((item)=>{
          const watcherTitle = item.watchersCount;
          const forkTitle = item.forks;
          return (
            <div className="col-md-6" style={styles.repositoryContainer}>
              <div style={styles.titleRow}>
                <h2>{item.name}</h2>
                <div style={styles.metaInfo}>
                  <h4 style={styles.metaInfoItem}>{item.language}</h4>
                  <h4 style={styles.metaInfoItem}>{watcherTitle}</h4>
                  <h4 style={styles.metaInfoItem}>{forkTitle}</h4>
                  <h4 style={[styles.metaInfoItem, styles.updatedDate]}>{item.updatedAt}</h4>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=>{
  const {list} = state.exampleReducer;
  return {
    list
  }
}


export default connect(mapStateToProps, {
  fetchGithub,
})(radium(GithubList));
