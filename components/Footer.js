import styles from '../styles/Footer.module.css';
import Link from 'next/link';


export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <p>© 2025 Peacebern. All rights reserved.</p>
    </footer>
  );
}



// const Footer = () => {
//     return (
//       <footer style={{ padding: '20px', textAlign: 'center', backgroundColor: '#333', color: 'white' }}>
//         <p>&copy; 2025 Dev Journal. All rights reserved.</p>
//       </footer>
//     );
//   };
  
//   export default Footer;
  