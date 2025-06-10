import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from "../side-nav/side-nav.component";

@Component({
  selector: 'cm-layout',
  standalone: true,
   imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, SideNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
isLogedIn = signal(false);

  title = 'billing-app';
  collapsed = signal(false);
  sideNavWidth = computed(() => this.collapsed() ? '65px' : '250px');
  loggedIn(a: boolean) {
    this.isLogedIn.set(a);
  }


  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  isMobile(): boolean {
    return window.innerWidth <= 768;
  }

}
