import { Component, computed, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { Router, RouterModule } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';

export type menuItem = {
  label: string;
  icon: string;
  route?: string;
  subItem?: menuItem[];
}

@Component({
  selector: 'cm-side-nav',
  standalone: true,
  imports: [CommonModule, MatListModule, MatTooltipModule, MatIconModule, MatDividerModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  sidenavCollapsed = signal(false);
  @Input() set collapsed(val: boolean) {
    this.sidenavCollapsed.set(val);
  }
  expandedItemLabel: string | null = null;
  constructor(private router: Router) { }
  toggleItem(label: string) {
    this.expandedItemLabel = this.expandedItemLabel === label ? null : label;
  }
  isRouteActive(route: string): boolean {
    return this.router.isActive(route, {
      paths: 'exact',
      queryParams: 'ignored',
      fragment: 'ignored',
      matrixParams: 'ignored',
    });
  }

  isExpanded(label: string): boolean {
    const item = this.menuItem().find(m => m.label === label);
    if (!item?.subItem?.length) return this.expandedItemLabel === label;

    return (
      this.expandedItemLabel === label ||
      item.subItem.some(child => this.router.url.startsWith(child.route!))
    );
  }


  profilePicSize = computed(() => this.sidenavCollapsed() ? '30' : '60')

  menuItem = signal<menuItem[]>([
    {
      label: 'Dash Board',
      icon: 'dashboard',
      route: 'dashboard'
    },
    {
      label: 'Settings',
      icon: 'settings_applications',
      route: 'settings',
      subItem: [
        {
          label: 'User Role',
          icon: 'person_add',
          route: 'user-role'
        },
        {
          label: 'Password Change',
          icon: 'change_history',
          route: 'password-change'
        },
        
      ]
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
