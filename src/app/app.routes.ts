import { Routes } from '@angular/router';
import { Component1Component } from './pages/component1/component1.component';
import { Component2Component } from './pages/component2/component2.component';

export const routes: Routes = [
    { path: 'component1', component: Component1Component },
    { path: 'component2', component: Component2Component },
    { path: '', redirectTo: '/component1', pathMatch: 'full' }
]; 