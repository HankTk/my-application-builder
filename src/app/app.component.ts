import { Component } from '@angular/core';
import { IpcService } from './ipc.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { NavlistComponent } from './components/navlist/navlist.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        RouterOutlet,
        NavlistComponent
    ]
})
export class AppComponent 
{
    title = 'My Electron Desktop';

    constructor(private ipcService: IpcService) 
    {
    }

    clickDevTools() 
    {
        this.ipcService.openDevTools();
    }
}
