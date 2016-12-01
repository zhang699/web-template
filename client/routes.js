import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Pages from './components/Pages/';
import * as Layouts from './components/layouts/';


export default (
  <Route>
    <Route path="/" component={Layouts.Main}>
      <Route path="/homepage" component={Pages.HomePage} />
      <IndexRoute component={Pages.HomePage} />
    </Route>
    <Route path="/" component={Layouts.NavBackground}>
      <Route path="/elements" component={Pages.ElementsPage} />
      <IndexRoute component={Pages.ElementsPage} />
    </Route>
  </Route>
);
