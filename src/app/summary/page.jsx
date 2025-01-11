"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Summary.module.css";

const SummaryPage = ({ userId, date }) => {
  const dispatch = useDispatch();
  const { groupedExpenses, totalExpense, status, error } = useSelector(
    (state) => state.expenses
  );

  useEffect(() => {
    if (userId && date) {
      dispatch(fetchSummaryData({ userId, date }));
    }
  }, [userId, date, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.title}>Daily Expense Summary</h2>
      <div className={styles.summaryItem}>
        <h3>{date}</h3>
        {groupedExpenses && Object.keys(groupedExpenses).length > 0 ? (
          <ul>
            {Object.keys(groupedExpenses).map((category) => (
              <li key={category} className={styles.expenseItem}>
                <span>{category}: </span>
                <span>{`$${groupedExpenses[category]}`}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No expenses recorded for this date.</p>
        )}
        <p className={styles.total}>Total: ${totalExpense}</p>
      </div>
    </div>
  );
};
export default SummaryPage;
