import { Component } from '@angular/core';
import { IpcService } from './services/ipc.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { NavlistComponent } from './components/navlist/navlist.component';
import { HeaderComponent } from './components/header/header.component';
import { SettingsComponent } from './components/settings/settings.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        RouterOutlet,
        NavlistComponent,
        HeaderComponent,
        SettingsComponent
    ]
})
export class AppComponent 
{

    title = 'My Application';

    constructor(private ipcService: IpcService) 
    {
    }

    clickDevTools() 
    {
        this.ipcService.openDevTools();
    }

}
