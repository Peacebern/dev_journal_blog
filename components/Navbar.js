import Link from 'next/link';
import styles from '../styles/Navbar.module.css' 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/category/General">General</Link></li>
        <li><Link href="/category/Tech">Tech</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
