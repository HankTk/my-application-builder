import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-component2',
    templateUrl: './component2.component.html',
    styleUrls: ['./component2.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class Component2Component implements OnInit 
{

    constructor() 
    { }

    ngOnInit() 
    {
    }
}