import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import * as Pages from './components/pages/';
import * as Layouts from './components/layouts/';


export default (
  <Route>
    <Route path="/" component={Layouts.Main}>
      <Route path="/about" component={Pages.AboutPage} />
      <IndexRoute component={Pages.AboutPage} />
    </Route>
    <Route path="/" component={Layouts.NavBackground}>
      <Route path="/css" component={Pages.ElementsPage} />
      <Route path="/css/colors" component={Pages.ColorPage} />
      <Route path="/css/media" component={Pages.ColorPage} />
      <Route path="/css/shadow" component={Pages.ColorPage} />
      <Route path="/css/table" component={Pages.ColorPage} />
      <Route path="/css/typography" component={Pages.ColorPage} />
      <Route path="/css/form" component={Pages.ColorPage} />
      <Route path="/css/Button" component={Pages.ColorPage} />

      <Route path="/components" component={Pages.ElementsPage} />
      <Route path="/components/header" component={Pages.ElementsPage} />
      <Route path="/components/footer" component={Pages.ElementsPage} />
      <Route path="/components/layouts" component={Pages.ElementsPage} />
      <Route path="/components/cards" component={Pages.ElementsPage} />
      <Route path="/components/displaybox" component={Pages.ElementsPage} />
      <Route path="/components/datepicker" component={Pages.ElementsPage} />
      <Route path="/components/search-field" component={Pages.ElementsPage} />
      <Route path="/components/editable-field" component={Pages.ElementsPage} />
      <Route path="/components/selector" component={Pages.ElementsPage} />
      <Route path="/components/warning-box" component={Pages.ElementsPage} />
      <Route path="/components/modal" component={Pages.ElementsPage} />


      <Route path="/containers" component={Pages.ElementsPage} />
      <Route path="/containers/navbar" component={Pages.ElementsPage} />
      <Route path="/containers/i18n" component={Pages.ElementsPage} />
      <Route path="/containers/api-indicator" component={Pages.ElementsPage} />

      <Route path="/showcase" component={Pages.ElementsPage} />

      <IndexRoute component={Pages.ColorPage} />
    </Route>
    <Redirect from="*" to="/" />
  </Route>
);
