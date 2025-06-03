import { Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';

export const routes: Routes = [
    { path: '', component: Component1Component },
    { path: '2', component: Component2Component },
//  { path: '404', component: NotfoundComponent },
//  { path: '**', redirectTo: '/404' }
];
