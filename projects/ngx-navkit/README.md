# NgxNavkit

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0. This library is used for creating simple angular navigation views.

## Getting Started

1. Run `npm install ngx-navkit` to generate a new component.
2. Add styles.
--*`angular.json`:
---`"styles": [
        "node_modules/ngx-navkit/scss/styles.scss"
    ]`
3. Add components to the view
--- `<navkit-container>
  <navkit-sidenav
    [mode]="'side'"
    [width]="300"
    [navItems]="navItems"
  ></navkit-sidenav>
  <navkit-content>
    <navkit-toolbar
      [height]="80"
      [sidenavToggle]="true"
      [sticky]="true"
    ></navkit-toolbar>
  </navkit-content>
</navkit-container>`
---Here the components `navkit-container` holds the sidenav and content components in a flexbox. The `navkit-toolbar` component can be outside the container. 
---Add your components to the view in sidenav and content components.