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
      <a href='#'>Home</a>
    </li>
    <li>
      <a href='#'>About</a>
    </li>
    <li>
      <a href='#'>Work</a>
    </li>
  </ul>
</label>
</div>
  )
}
