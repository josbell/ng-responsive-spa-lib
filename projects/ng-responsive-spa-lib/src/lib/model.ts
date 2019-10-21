import { Validators } from '@angular/forms';

export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface MenuItem {
  text: string;
  route: string;
  icon?: string;
  submenu?: MenuItem[];
}

export interface FrameworkConfigSettings {
  title: string;
  menuItems: MenuItem[];
  socialIcons?: IconFiles[];
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
}

export const usernameVal: Validators[] = [Validators.required, Validators.email];
export const passwordVal: Validators[] = [Validators.required, Validators.minLength(6)];
