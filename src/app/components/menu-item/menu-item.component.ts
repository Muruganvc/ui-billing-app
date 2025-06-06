import { Component, input, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { menuItem } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'cm-menu-item',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {
  item = input.required<menuItem>();
  collapsed = input(false);
}
