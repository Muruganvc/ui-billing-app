import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

export type menuItem = {
  label: string;
  icon?: string;
  route?: string;
}

@Component({
  selector: 'cm-side-nav',
  standalone: true,
  imports: [CommonModule, MatListModule,MatTooltipModule, MatIconModule, MatDividerModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }

  profilePicSize = computed(() => this.sidenavCollapsed() ? '30' : '60')

  menuItem = signal<menuItem[]>([
    {
      label: 'Dash Board',
      icon: 'dashboard',
      route: 'dashboard'
    },
    {
      label: 'Parties',
      icon: 'people_outline',
      route: 'parties'
    },
    {
      label: 'Purchase',
      icon: 'add_shopping_cart',
      route: 'purchase'
    },
    {
      label: 'Sales',
      icon: 'remove_shopping_cart',
      route: 'sales'
    },
  ]);

}
