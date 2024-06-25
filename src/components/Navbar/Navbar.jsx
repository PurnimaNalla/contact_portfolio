import React,{ useState } from "react";
import{Link} from'react-router-dom';
import styles from"./Navbar.module.css";
import{getImageUrl} from "../../utils";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
        Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={ menuOpen
                 ? getImageUrl("nav/closeIcon.png")
                 : getImageUrl("nav/menuIcon.png")

            } alt="menu-button/" 
            onClick={()=> setMenuOpen(!menuOpen)}>
            </img>
            <ul className={`${styles.menuItems} ${menuOpen &&  styles.menuOpen}`}
            onClick={() =>setMenuOpen(false) }
            >
                
                <li>
                    <Link to="skills">Skills</Link>
                </li>
                <li>
                    <Link to="projects">Projects</Link>
                </li>
                <li>
                    <Link to="contact">Contact</Link>
                </li>
               
                
            </ul>
        </div>
    </nav>
  );
  
};
