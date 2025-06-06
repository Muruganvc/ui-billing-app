import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PartiesComponent } from './components/parties/parties.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PasswordChangeComponent } from './components/settings/password-change/password-change.component';
import { UserRoleComponent } from './components/settings/user-role/user-role.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'parties',
        component: PartiesComponent
    },
    {
        path: 'purchase',
        component: ProductListComponent
    },
    {
        path: 'sales',
        component: SalesListComponent
    },
    {
        path: 'settings',
        component: SettingsComponent,
        children: [
            {
                path: 'user-role',
                component: UserRoleComponent
            },
            {
                path: 'password-change',
                component: PasswordChangeComponent
            },
        ]
    }
];
