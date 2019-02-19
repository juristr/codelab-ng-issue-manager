# IssueTracker

## Setup JSON Mock Server

```
/// package.json
"scripts": {
  "start:server": "json-server --routes ./mock/routes.json --watch ./mock/db.json",
  "start:proxy": "ng serve  --proxy proxy.conf.json",
}
```

Create a `proxy.conf.json` file with the following content:

```
{
  "/api/*": {
    "target": "http://localhost:3000",
    "secure": false,
    "logLevel": "debug"
  }
}
```

## Steps

### 1. Install Angular Material

```
$ ng add @angular/material
```

### 2. Generate SharedModule, setup app shell

```
$ ng g m shared
```

Import `SharedModule` in `AppModule`.

Install a couple of Angular Material modules in the `SharedModule` and re-export them to be used by other modules as well.

```
const materialModules = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];
```

### 3. Setup the App Shell

Add the following to the `app.component.html`

```
<div class="flexbox-parent">
  <div class="flexbox-item header">
    <mat-toolbar color="primary" role="header" class="app-navbar">
      <div fxFlex="150px">
        <span>{{ title }}</span>
      </div>
      <div fxFlex>
        <a href="javascript:;" mat-button>Issues</a>
        <a href="javascript:;" mat-button>Search</a>
      </div>
    </mat-toolbar>
  </div>

  <div class="flexbox-item fill-area content flexbox-item-grow">
    <div class="app-container">
      Content here
    </div>
  </div>
</div>
```

Install `@angular/flex-layout` and add it to the `SharedModule`.

Add the following basic styles

```
/* You can add global styles to this file, and also import other style files */

html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-family: Roboto, 'Helvetica Neue', sans-serif;
}

.flexbox-parent {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: flex-start; /* align items in Main Axis */
  align-items: stretch; /* align items in Cross Axis */
  align-content: stretch; /* Extra space in Cross Axis */
}

.app-container {
  flex-grow: 1;
}

.app-page-container {
  padding: 15px;
}

.app-sidenav {
  width: 250px;
}

.flexbox-item-grow {
  flex: 1; /* same as flex: 1 1 auto; */
}

.fill-area {
  display: flex;
  flex-direction: row;

  justify-content: flex-start; /* align items in Main Axis */
  align-items: stretch; /* align items in Cross Axis */
  align-content: stretch; /* Extra space in Cross Axis */
}

.footer {
  padding: 5px;
}
```

### 4. Generate the List Module

```
$ ng g m issue-list --routing
```

Add a lazy routing configuration to the main module.

```
{
  path: 'issues',
  loadChildren: './issue-list/issue-list.module#IssueListModule'
}
```

Add `<router-outlet>` to `app.component.html`. Add a redirect configuration

```
{
  path: '',
  redirectTo: 'issues'
},
```

### 5. Read list of issues

Create a new service for reading the issues

```
$ ng g s issue-list/services/issue-facade
```

Bind the HTTP call to the component:

```
issues$ = this.issueFacade.loadIssues();
```

the HTML code for visualizing the issues in the `issues.component.html`.

```
<mat-card *ngFor="let issue of (issues$ | async)">
  <mat-card-header>
    <mat-card-title>{{ issue.title }}</mat-card-title>
  </mat-card-header>
  <mat-card-actions>
    <button mat-button>OPEN</button>
  </mat-card-actions>
</mat-card>
```

### 6. generate filter component

```
$ ng g m issue-search --routing
```

generate a corresponding component

```
$ ng g c issue-search/containers/issue-search
```
