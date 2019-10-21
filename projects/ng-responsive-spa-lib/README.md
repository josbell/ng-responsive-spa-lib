# NgResponsiveSpaLib

A SASS UI framework for rapid development of responsive Single Page Applications.
Uses Angular Material and Angular FlexLayout.

This framework can be used to streamline development of responsive layout and dynamic menu and forms.






---
## Installation

The library is available as npm package, so all you need to do is run the following command:
```
 npm install --save ng-responsive-spa-lib;
 ```

This command will create a record in your package.json file and install the package into the npm modules folder.






---

## Getting Started

First thing you need to do is to import the ng-responsive-spa-lib module into your app module.

 
```typescript
import { NgResponsiveSpaLibModule } from 'ng-responsive-spa-lib';

// ...
@NgModule({
  imports: [
    // ...
    
    NgResponsiveSpaLibModule,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```






---
## Add Material Theme and Icons


### Themes

Including a theme is required to apply all of the core and theme styles to your application.

To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally in your application. If you're using the Angular CLI, you can add this to your styles.css:

```typescript
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```

If you are not using the Angular CLI, you can include a prebuilt theme via a <link> element in your index.html.

Look up Angular Material Themes
### Icons

If you want to use the mat-icon component with the official Material Design Icons, load the icon font in your `index.html`.

```typescript
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```






---
## Configure Responsive Header and Menu

To configure the header and menu we must import `NgResponsiveSpaLibService` and `FrameworkConfigSettings` in `app.component.ts` file.

```typescript
import { NgResponsiveSpaLibService } from 'ng-responsive-spa-lib';
import { FrameworkConfigSettings } from 'ng-responsive-spa-lib';
```

We we are ready to configure the header and menu by passing the config object to the service. The config object can contain three properties: `title`, `menuItems`, and `socialIcons`.

```typescript
constructor(configService: NgResponsiveSpaLibService) {
    const frameworkConfig: FrameworkConfigSettings = {
      title: "Title",
      menuItems: [
        {
            text: 'MenuItem1',
            route: '/menuItem1',
            icon: 'iconName'
        },
        {
            text: 'MenuItem2',
            route: '/menuItem2',
            icon: 'iconName',
            submenu: [
                { 
                    text: 'SubmenuItem1',
                    route: '/menuItem2/submenu1/view',
                    icon: 'iconName'
                },
                { 
                    text: 'SubmenuItem1',
                    route: '/menuItem2/submenu2/view',
                    icon: 'iconName'
                },
            ]
        }
      ],
      socialIcons: [
        {imageFile: 'assets/link/to/file.svg', alt: 'Facebook', link: 'http://www.facebook.com'},
        {imageFile: 'assets/link/to/file.svg', alt: 'Instagram', link: 'http://www.instagram.com'},
        {imageFile: 'assets/link/to/file.svg', alt: 'Youtube', link: 'http://www.youtube.com'}
      ]
    };
    configService.configure(frameworkConfig);
  }
```





### Config Object
| Property | Description |
| --- | --- |
| `title`  | Accepts a string that will be displayed on the header  |
| `menuItems`  |  Accepts an array of objects with `text`, `route`, and `icon` properties |
| `socialIcons`  |  Accepts an array of objects with `imageFile`, `alt`, and `link` properties |


#### Menu Item Config Object
Optional config to create responsive menu with ability to add sub menu. Currently submenu items cannot have submenu items.
| Property | Description |
| --- | --- |
| `text`  | Accepts string that will be used as the menu item label  |
| `route`  |  Accepts string representing route path of menu item|
| `icon`  |  Accepts path string of icon file. Optional config to display icon next to menu item  |
| `submenu`  |  Accepts an array of menu item objects that will pop up when parent menu item is highlighted |

#### Social Icons Config Object
Optional config to display social icons on the right side of the header that will redirect user to configured route.

| Property | Description |
| --- | --- |
| `imageFile`  | Accepts string that will be used as the menu item label  |
| `alt`  |  Accepts string representing route path of menu item|
| `link`  |  Accepts path string of icon file. Optional config to display icon next to menu item  |


## Add Framework Component to Template
In `app.component.html`:

```html
<rsl-ng-responsive-spa-lib></rsl-ng-responsive-spa-lib>
```
---
## Sign In / Register Components

To configure the signin and register components user must create a service that extends UserApi and provide UserApi as this service. Below UserService represents the newly created service.

```typescript
import { NgResponsiveSpaLibModule, UserApi } from 'ng-responsive-spa-lib';
// ...
@NgModule({
  imports: [ ... ],
  declarations: [ ... ],
  providers: [{ provide: UserApi, useExisting: UserService }],
})
// ...
```

This is an example of what the service would look like:

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserService implements UserApi {
  isLoggedIn = true;
  constructor() { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<boolean> {
    ... // code that handles signIn and returns boolean observable 
  }

  signOut(): Observable<boolean> {
    ... // code that handles signOut and returns boolean observable 
  }

  changePassword(username: string, oldPassword: string, newPassword: string): Observable<boolean> {
    ... // code that handles changePassword and returns boolean observable 
  }

  register(userInfo: UserInfo): Observable<boolean> {
    ... // code that handles register and returns boolean observable
  }

}
```
---
## Dynamic Forms

The dynamic form component `rsl-dynamic-form` takes three inputs and has two outputs.
The three operations available are: `view`, `edit`, and `create`.

If using dynamic forms we must configure the component route to accept an operations param:

*App Routing Module*
```typescript
{ path: 'profile/:operation', component: SampleFormComponent},
{ path: 'profile', redirectTo: 'sampleComponent/view', pathMatch: 'full'},
```
*Template*:
```html
<rsl-dynamic-form
    [viewModel]="model"
    [formFields]="fields"
    [operation]="operation$ | async"
    (update)="update($event)"
    (create)="create($event)">
</rsl-dynamic-form>
  ```
*Component*

```typescript
export SampleFormComponent implements OnInit {

  model;
  operation$: Observable<string>;
  fields = fieldsConfig;

  constructor(
    private dataService: AppDataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // fetching operation observable from url
    this.operation$ = this.route.params.pipe(map(p => p.operation));
    
    // fetching the form model provided that its not a create operation
    this.dataService.getData().subscribe(data => this.model = data);
  }

  update = (data) => {
    // Handle update operation
    // In this case we are navigating back to the view mode
    this.router.navigate(['../view'], { relativeTo: this.route });
  }

  create = (data) => {
      // Handle create operation
  }

}
  ```
### Inputs/Outputs

| Input | Description |
| --- | --- |
| `viewModel`  | The `viewModel` Input is the form model to be bound.  |
| `operation`  |  Accepts `Observable<string>` of three possible values: `view`, `edit`, and `create`. |
| `formFields`  | The `formFields` Input accepts an array of objects with `key`, `type`, `label`, `validations`, and `errorMsgs` |

| Output | Description |
| --- | --- |
| `update`  | Emits form data on submit when operation is `edit`  |
| `create`  |  Emits form data on submit when operation is `create` |

### Form Fields Config Object

| Property | Data Type | Description |
| --- | --- | --- |
| `key`  | String | Required to keep track of form control and for accessibility  |
| `type`  | String | Control Type. Currently only string is supported. |
| `validations` | Validators | Used to validate control |
| `erroMsgs` | Object | Object with key value pair of validation name and message to be displayed |


*Example:*
```typescript
export const formFields = [
  {
    key: 'id',
    type: 'string',
    label: 'ID',
    validations: [Validators.required],
    errorMsgs: { 'required': 'You must enter a value'}
  },
  {
    key: 'firstName',
    type: 'string',
    label: 'First Name',
    validations: [Validators.required],
    errorMsgs: { 'required': 'You must enter a value'}
  },
  {
    key: 'lastName',
    type: 'string',
    label: 'Last Name',
    validations: [Validators.required],
    errorMsgs: { 'required': 'You must enter a value'}
  },
  {
    key: 'userName',
    type: 'string',
    label: 'User Name',
    validations: [Validators.required]
  },
  {
    key: 'email',
    type: 'string',
    label: 'Email',
    validations: [Validators.required, Validators.email],
    errorMsgs: { 'required': 'You must enter a value', 'email': 'Not a valid email'}
  },
  {
    key: 'password',
    type: 'string',
    label: 'Password',
    validations: [Validators.required]
  },
];
```
