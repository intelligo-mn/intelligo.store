import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})

/**
 * Switcher component
 */
export class SwitcherComponent implements OnInit {

  // set variable
  isVisible: boolean;

  constructor() { }

  ngOnInit(): void {
    // assign value
    this.isVisible = false;
  }

  /**
   * Change theme color
   */
  onChangeColor(color: string) {
    document
      .getElementById('color-opt')
      .setAttribute('href', './assets/css/colors/' + color + '.css');
  }

  /**
   * Set dark theme
   */
  setDark() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }

  /**
   * Set light theme
   */
  setLight() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }

  /**
   * Set dark-rtl theme
   */
  darkRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
  }
  /**
   * Set dark-light theme
   */
  darkLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set rtl theme
   */
  setRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-rtl.min.css');
  }
  /**
   * Set light theme
   */
  setLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }

  /**
   * Toggle switcher
   */
  onChangeSwitch() {
    this.isVisible = !this.isVisible;
  }

}
