# NgxNavkit

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0. This library is used for creating simple angular navigation views.


## Installation

1. Install ngx-navkit with npm

```bash
  npm install ngx-navkit
```
2. Add styles
`angular.json`:
```bash
  "styles": [
    "node_modules/ngx-navkit/scss/styles.scss"
  ]
```
3. Import modules:
`app.module.ts`:
```bash
  import { NgxNavkitModule } from 'ngx-navkit';

  @NgModule({
    imports: [NgxNavkitModule]
  })
```
## How to use

After importing NgxNavkit module in  app.module.ts, add the components of the library in app.component.html

```bash
    <navkit-container>
        <navkit-sidenav [mode]="'side'" [width]="300" 
        [navItems]="navItems">
            //Add sidenav items here
        </navkit-sidenav>
            <navkit-content>
              <navkit-toolbar [height]="80" [sidenavToggle]="true"
              [sticky]="true">
                //Add Toolbar/Navbar content here
              </navkit-toolbar>
              //Add your main content in here
            </navkit-content>
    </navkit-container>


```

