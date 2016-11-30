import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Pages from './components/pages/';
import * as Layouts from './components/layouts/';


export default (
  <Route>
    <Route path="/" component={Layouts.Main}>
      <Route path="/homepage" component={Pages.HomePage} />
      <Route path="/elements" component={Pages.ElementsPage} />
      <IndexRoute component={Pages.HomePage} />
    </Route>
  </Route>
);
