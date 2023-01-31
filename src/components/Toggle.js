import React, { useEffect, useState } from 'react';
import './Toggle.css';
import { setTheme } from '../utils/themes';

function Toggle() {
    // false = dark mode because of the way I wrote the CSS
    const [active, setActive] = useState(true)
    // the opposite, for screenreaders
    const [ariaActive, setAriaActive] = useState(false)
    let theme = localStorage.getItem('theme')

    const changeThemeAndToggle = () => {
      if (localStorage.getItem('theme') === 'theme-light') {
        setTheme('theme-dark')
        setActive(false)
        setAriaActive(true)
        
      } else {
        setTheme('theme-light')
        setActive(true)
        setAriaActive(false)
      }
    }

    const handleOnClick = () => {
      changeThemeAndToggle()
    }

    const handleKeypress = e => {
      if (e.code === "Enter") {
        changeThemeAndToggle()
      }
    }

    useEffect(() => {
      if (localStorage.getItem('theme') === 'theme-light') {
        setActive(true)
        setAriaActive(false)
      } else if (localStorage.getItem('theme') === 'theme-dark') {
        setActive(false)
        setAriaActive(true)
      }
    }, [theme])

    return (
      <div className="container--toggle">
        <input  aria-label="dark mode toggle" 
                role="switch" 
                aria-checked={ariaActive} 
                onKeyPress={handleKeypress} 
                type="checkbox" 
                id="toggle" 
                className="toggle--checkbox" 
                onClick={handleOnClick} 
                checked={active} 
                readOnly />
        <label htmlFor="toggle" className="toggle--label">
          <span className="toggle--label-background"></span>
        </label>
        
      </div>
    )
}

export default Toggle;