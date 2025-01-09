"use client"
import styles from '../app/styles/ExpenseForm.module.css';

const ExpenseForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <div className={styles.formContainer}>
      <form className={styles.expenseForm} onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" className={styles.input}>
          <option>Groceries</option>
          <option>Transportation</option>
          <option>Healthcare</option>
          <option>Utility</option>
          <option>Charity</option>
          <option>Miscellaneous</option>
        </select>

        <label htmlFor="purpose">Purpose:</label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          className={styles.input}
          placeholder="E.g., Groceries for the week"
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          className={styles.input}
          placeholder="E.g., 50"
        />

        <button type="submit" className={styles.button}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
