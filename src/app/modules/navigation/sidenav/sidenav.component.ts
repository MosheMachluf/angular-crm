import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/modules/authentication/services/authentication.service';

export interface NavItem {
  title: string;
  icon?: string;
  link?: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  open: boolean = true;
  @Output() toggle = new EventEmitter();

  toggleSidenav() {
    this.toggle.emit((this.open = !this.open));
  }

  constructor(public authService: AuthenticationService) {}

  navItems: NavItem[] = [
    // Array<NavItem>
    {
      title: 'dashboard',
      // icon: 'fas fa-border-all',
      icon: 'fas fa-chart-line',
      link: 'dashboard',
    },
    {
      title: 'customers',
      icon: 'fas fa-users',
      link: 'customers',
    },
    {
      title: 'contacts',
      icon: 'fas fa-address-book',
      link: 'contacts',
    },
    // {
    //   title: 'leads',
    //   icon: 'fas fa-hand-point-up',
    //   link: 'leads',
    // },
    // {
    //   title: 'reports',
    //   icon: 'fas fa-flag',
    //   link: 'reports',
    // },
    // {
    //   title: 'integrations',
    //   icon: 'fab fa-stack-exchange',
    //   link: 'integrations',
    // },
    // {
    //   title: 'year-end sale',
    //   icon: 'fas fa-glass-cheers',
    //   link: 'yes',
    // },
  ];
}
