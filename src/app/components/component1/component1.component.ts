import { Component, OnInit, NgZone } from '@angular/core';
import { IpcService } from '../../ipc.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-component1',
    templateUrl: './component1.component.html',
    styleUrls: ['./component1.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class Component1Component implements OnInit 
{
    arch = '-';
    hostname = '-';
    platform = '-';
    release = '-';
    error = '';

    constructor(private ipcService: IpcService, private ngZone: NgZone) 
    { }

    ngOnInit() 
    {
        this.ipcService.getSystemInfoAsync()
            .subscribe({
                next: systemInfo => 
                {
                    this.ngZone.run(() => 
                    {
                        this.arch = systemInfo.arch;
                        this.platform = systemInfo.platform;
                        this.release = systemInfo.version;
                        this.error = '';
                    });
                },
                error: error => 
                {
                    this.ngZone.run(() => 
                    {
                        console.error('Error getting system info:', error);
                        this.error = 'Failed to load system information';
                    });
                }
            });
    }
}
