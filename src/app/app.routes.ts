import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PartiesComponent } from './components/parties/parties.component';
import { SalesListComponent } from './components/sales-list/sales-list.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
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
    }
];
