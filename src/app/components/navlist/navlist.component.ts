import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navlist',
    templateUrl: './navlist.component.html',
    styleUrls: ['./navlist.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        MatListModule,
        MatIconModule,
        RouterLink
    ]
})
export class NavlistComponent implements OnInit 
{

  @Output() sidenavClose = new EventEmitter();

  constructor() 
  { }

  ngOnInit() 
  {
  }

  public onSidenavClose = () => 
  {
      this.sidenavClose.emit();
  }
}
