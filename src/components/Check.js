import React from 'react'
import './Check.css';
export default function Navbar1() {
  return (
    <div>
      <label>
  <input type='checkbox'/>
  <span class='menu'>
    <span class='hamburger'></span>
  </span>
  <ul>
    <li>
      <button>Home</button>
    </li>
    <li>
      <button>About</button>
    </li>
    <li>
      <button>Work</button>
    </li>
  </ul>
</label>
</div>
  )
}
