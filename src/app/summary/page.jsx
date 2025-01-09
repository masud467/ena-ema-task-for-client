import styles from "../styles/Summary.module.css";

const SummaryPage = () => {
  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles}>Daily Expense Summary</h2>
      <div className={styles.summaryItem}>
        <h3>Jan 09, 2025</h3>
        <ul>
          <li>Groceries: $50</li>
          <li>Transportation: $20</li>
          <li>Healthcare: $30</li>
          <li> Utility: $20</li>
          <li> Charity: $10</li>
          <li> Miscellaneous: $5</li>
        </ul>
        <p className={styles.total}>Total: $100</p>
      </div>
    </div>
  );
};

export default SummaryPage;
