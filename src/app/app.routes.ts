import {Routes} from '@angular/router';
import {AboutComponent} from './features/about/about.component';
import {ContactUsComponent} from './features/contact-us/contact-us.component';
import {UserComponent} from './features/user/user.component';
import {UsersReportComponent} from './features/users-report/users-report.component';
import {UsersInfoComponent} from './features/users-info/users-info.component';
import {UsersComponent} from './features/users/users.component';


export const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactUsComponent},
  {
    path: 'users',
    children: [
      {path: '', component: UsersComponent},
      {path: 'info', component: UsersInfoComponent},
      {path: 'report', component: UsersReportComponent},
      {path: ':user', component: UserComponent},
    ]
  },
];
