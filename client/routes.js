import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as Pages from './components/pages/';
import * as Layouts from './components/layouts/';


export default (
  <Route>
    <Route path="/" component={Layouts.Main}>
      {/* <Route path="/" component={Pages.ColorPage} /> */}
      <IndexRoute component={Pages.ColorPage} />
    </Route>
    <Route path="/" component={Layouts.NavBackground}>
      <Route path="/css" component={Pages.ElementsPage} />
      <Route path="/css/colors" component={Pages.ColorPage} />

      <Route path="/component" component={Pages.ElementsPage} />
      <Route path="/container" component={Pages.ElementsPage} />

      <Route path="/elements" component={Pages.ElementsPage} />

      <IndexRoute component={Pages.ElementsPage} />
    </Route>
  </Route>
);
