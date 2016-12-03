import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Pages from './components/pages/';
import * as Layouts from './components/layouts/';


export default (
  <Route>
    <Route path="/" component={Layouts.Main}>
      <IndexRoute component={Pages.ElementsPage} />
    </Route>
    <Route path="/" component={Layouts.NavBackground}>
      <Route path="/elements" component={Pages.ElementsPage} />
      <Route path="/colors" component={Pages.ColorPage} />
      <IndexRoute component={Pages.ElementsPage} />
    </Route>
  </Route>
);
