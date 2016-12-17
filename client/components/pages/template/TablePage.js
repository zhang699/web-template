import React from 'react';
import radium from 'radium';
import * as colorsSet from '../../../styles/colors';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import tableStyles from '../../../styles/table';
import { pagenationBtn, btnPrimary } from '../../../styles/button';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  },
  pageBtn: {
    backgroundColor: colorsSet.deepOrange600,
    ':hover': {backgroundColor: colorsSet.deepOrange700}
  }
};

const TablePage = (props) => (
  <div style={styles.container}>
    <Header title={"Table"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <Card style={{ flexDirection: 'row', flexWrap: 'wrap', padding: '40px 0', justifyContent: 'center', alignItems: 'center' }}>
            <table style={{ ...tableStyles.table }}>
              <thead style={{ ...tableStyles.thead }}>
                <tr style={{ ...tableStyles.headrow }}>
                  <th style={{ ...tableStyles.th }}>Test</th>
                  <th style={{ ...tableStyles.th }}>Test</th>
                </tr>
              </thead>
              {
                [1, 2, 3, 4, 5].map((item, idx) => (
                  <tr key={'tr'+idx} style={{ ...tableStyles.tr(idx) }}>
                    <td style={{ ...tableStyles.td }}>qwe</td>
                    <td style={{ ...tableStyles.td }}>qw</td>
                  </tr>
                ))
              }
            </table>
            <div className="row" style={{marginTop: '20px'}}>

              {
                ["<<" , 1, 2, 3, 4, 5, 6, "...", 10, ">>"].map((item, idx) => <button key={`btn-${idx}`} style={
                  (item === 3) ? pagenationBtn(btnPrimary, 'active') : pagenationBtn(btnPrimary)
                }>{item}</button>)
              }
            </div>

          </Card>
        </div>

      </div>

      <Footer />
  </div>
);

export default radium(TablePage);
