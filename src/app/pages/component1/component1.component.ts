import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class Component1Component 
{
    error = '';

    constructor() 
    { }
}
