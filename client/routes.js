import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import * as Pages from './components/pages/';
import * as Layouts from './components/layouts/';

export const Routes = [
  { title: 'Test', link: 'land', navItem: false, childrenNodes: null, layout: Layouts.Main, page: Pages.AboutPage },
  { title: 'About', link: 'about', navItem: true, childrenNodes: null, layout: Layouts.Main, page: Pages.AboutPage },
  { title: 'Components', link: 'components', navItem: true, layout: Layouts.NavBackground, page: Pages.ComponentPage, childrenNodes: [
    { title: 'Header', link: 'header', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Footer', link: 'footer', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Layouts', link: 'layouts', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Cards', link: 'cards', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Displaybox', link: 'displaybox', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Datepicker', link: 'datepicker', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'SearchField', link: 'search-field', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'EditableField', link: 'editable-field', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Selector', link: 'selector', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'WarningBox', link: 'warning-box', childrenNodes: null, page: Pages.ComponentPage },
    { title: 'Modal', link: 'modal', childrenNodes: null, page: Pages.ComponentPage }],
  },
  { title: 'CSS', link: 'css', navItem: true, layout: Layouts.NavBackground, page: Pages.ColorPage, childrenNodes: [
    { title: 'Color', link: 'colors', childrenNodes: null, page: Pages.ColorPage },
    { title: 'Media', link: 'media', childrenNodes: null, page: Pages.MediaPage },
    { title: 'Shadow', link: 'shadow', childrenNodes: null, page: Pages.ShadowPage},
    { title: 'Typography', link: 'typography', childrenNodes: null, page: Pages.TypographyPage },
    { title: 'Table', link: 'table', childrenNodes: null, page: Pages.TablePage },
    { title: 'Form', link: 'form', childrenNodes: null, page: Pages.FormPage },
    { title: 'Button', link: 'button', childrenNodes: null, page: Pages.ButtonPage }],
  },
  { title: 'containers', link: 'containers', navItem: true, layout: Layouts.NavBackground, page: Pages.ElementsPage, childrenNodes: [
    { title: 'Navbar', link: 'navbar', childrenNodes: null, page: Pages.ElementsPage },
    { title: 'i18n', link: 'i18n', childrenNodes: null, page: Pages.ElementsPage },
    { title: 'API Indicator', link: 'api-indicator', childrenNodes: null, page: Pages.ElementsPage }],
  },
  { title: 'Showcase', link: 'showcase', navItem: true, layout: Layouts.NavBackground, page: Pages.ElementsPage, childrenNodes: null }
];

export default (routes => acl => {
  console.log(acl, "ACL TEMP TODO");
  return routes.map( route => {
    if(route.childrenNodes) {
      return (
        <Route key={`${route.link}-first-level`} path="/" component={route.layout}>
          <Route path={`${route.link}`} component={route.page} />
          {
            route.childrenNodes.map( childRoute => (
              <Route key={`${route.link}-${childRoute.link}`} path={`${route.link}/${childRoute.link}`} component={childRoute.page} />
            ))
          }
          <IndexRoute component={route.page} />
        </Route>
      )
    }

    return (
      <Route path="/" component={route.layout}>
        <Route path={`${route.link}`} component={route.page} />
        <IndexRoute component={route.page} />
      </Route>
    )
  })
  .concat([<Redirect from="*" to="/" />]);

})(Routes);
