import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from "./components/side-nav/side-nav.component";
import { LoginComponent } from "./components/settings/login/login.component";
import { SignUpComponent } from "./components/settings/sign-up/sign-up.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, SideNavComponent, LoginComponent, SignUpComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isLogedIn = signal(false);

  title = 'billing-app';
  collapsed = signal(false);
  sideNavWidth = computed(() => this.collapsed() ? '65px' : '250px');
  loggedIn(a: boolean) {
    this.isLogedIn.set(a);
  }
}
