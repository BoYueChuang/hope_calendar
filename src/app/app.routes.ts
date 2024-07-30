import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: '/calendar/index', pathMatch: 'full' },
    { path: 'calendar', loadChildren: () => import('./components/hope_calendar/hope_calendar.routes').then(m => m.HopeCalendarRoutes) },
    // { path: 'error', component: ErrorComponent },
    // { path: '**', redirectTo: '/error?reason=NavError' }
];