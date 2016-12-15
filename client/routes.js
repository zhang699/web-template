import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import * as Pages from './components/pages/';
import * as Layouts from './components/layouts/';

// const Routes = (
//   <Route>
//     <Route path="/" component={Layouts.Main}>
//       <Route path="/about" component={Pages.AboutPage} />
//       <IndexRoute component={Pages.AboutPage} />
//     </Route>
//     <Route path="/" component={Layouts.NavBackground}>
//       <Route path="css" component={Pages.ElementsPage} />
//       <Route path="css/colors" component={Pages.ColorPage} />
//       <Route path="css/media" component={Pages.MediaPage} />
//       <Route path="css/shadow" component={Pages.ShadowPage} />
//       <Route path="css/typography" component={Pages.TypographyPage} />
//       <Route path="css/table" component={Pages.TablePage} />
//       <Route path="css/form" component={Pages.FormPage} />
//       <Route path="css/button" component={Pages.ButtonPage} />
//
//       <Route path="components" component={Pages.ComponentPage} />
//       <Route path="components/header" component={Pages.ComponentPage} />
//       <Route path="components/footer" component={Pages.ComponentPage} />
//       <Route path="components/layouts" component={Pages.ComponentPage} />
//       <Route path="components/cards" component={Pages.ComponentPage} />
//       <Route path="components/displaybox" component={Pages.ComponentPage} />
//       <Route path="components/datepicker" component={Pages.ComponentPage} />
//       <Route path="components/search-field" component={Pages.ComponentPage} />
//       <Route path="components/editable-field" component={Pages.ComponentPage} />
//       <Route path="components/selector" component={Pages.ComponentPage} />
//       <Route path="components/warning-box" component={Pages.ComponentPage} />
//       <Route path="components/modal" component={Pages.ComponentPage} />
//
//
//       <Route path="containers" component={Pages.ElementsPage} />
//       <Route path="containers/navbar" component={Pages.ElementsPage} />
//       <Route path="containers/i18n" component={Pages.ElementsPage} />
//       <Route path="containers/api-indicator" component={Pages.ElementsPage} />
//
//       <Route path="showcase" component={Pages.ElementsPage} />
//
//       <IndexRoute component={Pages.ColorPage} />
//     </Route>
//     <Redirect from="*" to="/" />
//   </Route>
// );

const ROUTES = [
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
  const newRoutes = routes.map( route => {
    if(route.childrenNodes) {
      return (
        <Route path="/" component={route.layout}>
          <Route path={`${route.link}`} component={route.page} />
          {
            route.childrenNodes.map( childRoute => (
              <Route path={`${route.link}/${childRoute.link}`} component={childRoute.page} />
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
  });
  newRoutes.push(<Redirect from="*" to="/" />);
  return newRoutes;
})(ROUTES);
