
import styles from "../app/styles/NabVar.module.css";

const NavBar = () => {
  
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>ExpenseTracker</div>
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/summary">Summary</a>
          <a href="/login">Login</a>
        </nav>
        
      </header>
    </div>
  );
};

export default NavBar;
