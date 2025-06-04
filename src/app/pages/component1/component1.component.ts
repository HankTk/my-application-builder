import { Component, OnInit, NgZone } from '@angular/core';
import { IpcService } from '../../services/ipc.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.scss'],
    standalone: true,
    imports: [CommonModule]
})
export class Component1Component implements OnInit 
{
    error = '';

    constructor(private ipcService: IpcService, private ngZone: NgZone) 
    { }

    ngOnInit() 
    {
    }
}
