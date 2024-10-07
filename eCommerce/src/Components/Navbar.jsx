import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Navbar.module.css'
import {ShoppingCart} from 'phosphor-react'
import {HouseLine} from 'phosphor-react'
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link className={styles.links} to="/"><HouseLine/> Home</Link>
      <Link className={styles.links} to="/cart"><ShoppingCart/> My Cart</Link>
    </div>
  )
}

export default Navbar;
