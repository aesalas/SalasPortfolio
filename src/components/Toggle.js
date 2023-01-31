import React, { useEffect, useState } from 'react';
import './Toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    // false = dark mode because of the way I wrote the CSS
    const [active, setActive] = useState(false)
    // the opposite, for screenreaders
    const [ariaActive, setAriaActive] = useState(false)
    let theme = localStorage.getItem('theme')

    function setTheme(themeName) {
      localStorage.setItem('theme', themeName);
      document.documentElement.className = themeName;
  }

  // function to toggle between light and dark theme
  function toggleTheme() {
      if (localStorage.getItem('theme') === 'theme-dark') {
          setTheme('theme-light');
      } else {
          setTheme('theme-dark');
      }
  }

  // Immediately invoked function to set the theme on initial load
  (function () {
      if (localStorage.getItem('theme') === 'theme-dark') {
          setTheme('theme-dark');
      } else {
          setTheme('theme-light');
      }

    return (
      <div className="container--toggle">
        <input type="checkbox" id="toggle" class="toggle--checkbox" />
        <label for="toggle" class="toggle--label">
          <span class="toggle--label-background"></span>
        </label>
        
      </div>
    )
}

export default Toggle;