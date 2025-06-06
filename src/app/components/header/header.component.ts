import { Component, Input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, MatIconModule, MatButtonModule]
})
export class HeaderComponent 
{

  @Input() title: string = '';
  @Input() sidenav!: MatSidenav;
  @Input() settings!: MatSidenav;

} 