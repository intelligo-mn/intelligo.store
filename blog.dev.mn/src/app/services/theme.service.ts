import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  _theme: 'dark' | 'light' = 'dark';
  themeChange = new BehaviorSubject<"dark" | "light">(this._theme);
  set theme(theme: 'dark' | 'light') {
    this._theme = theme;
    this.themeChange.next(theme);

    document.body.classList.toggle('dark', this._theme === 'dark');

    if (window.localStorage) {
      window.localStorage.setItem(
        'theme',
        document.body.classList.contains('dark') ? 'dark' : 'light'
      );
    }
  }

  get theme() {
    return this._theme;
  }

  initTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const storedTheme =
      window.localStorage && window.localStorage.getItem('theme');

    prefersDark.addListener((mediaQuery) => {
      if (
        (mediaQuery.matches && this.theme === 'light') ||
        (!mediaQuery.matches && this.theme === 'dark')
      ) {
        this.toggleTheme();
      }
    });

    this.theme =
      storedTheme === 'dark' || storedTheme === 'light'
        ? storedTheme
        : prefersDark
        ? 'dark'
        : 'light';
  }

  toggleTheme() {
    if (this._theme === 'dark') {
      this.theme = 'light';
    } else {
      this.theme = 'dark';
    }
  }
}
