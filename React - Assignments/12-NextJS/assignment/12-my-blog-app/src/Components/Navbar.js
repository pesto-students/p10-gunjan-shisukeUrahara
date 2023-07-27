import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Navbar = () => (
  <nav className={styles.nav}>
    <Link href="/" className={styles.link}>
      Home
    </Link>
  </nav>
);

export default Navbar;
