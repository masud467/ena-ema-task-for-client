"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMonthlySummaryData } from "../../lib/features/summary/summaryApi";
import styles from "../styles/Summary.module.css";


// const SummaryPage = ({ userId, date }) => {
//   const dispatch = useDispatch();
//   const { groupedExpenses, totalExpense, status, error } = useSelector(
//     (state) => state.summary
//   );

//   useEffect(() => {
//     if (userId && date) {
//       const formattedDate = new Date(date).toLocaleString();
//       dispatch(fetchSummaryData({ userId, date: formattedDate }));
//     }
//   }, [userId, date, dispatch]);

//   if (status === "loading") {
//     return <div className={styles.loading}>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div className={styles.error}>Error: {error}</div>;
//   }

//   return (
//     <div className={styles.summaryContainer}>
//       <h2 className={styles.title}>Daily Expense Summary</h2>
//       <div className={styles.summaryItem}>
//         <h3>{date}</h3>
//         {groupedExpenses && Object.keys(groupedExpenses).length > 0 ? (
//           <ul>
//             {Object.entries(groupedExpenses).map(([category, amount]) => (
//               <li key={category} className={styles.expenseItem}>
//                 <span>{category}: </span>
//                 <span>${amount.toFixed(2)}</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No expenses recorded for this date.</p>
//         )}
//         <p className={styles.total}>
//           Total: ${totalExpense.toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SummaryPage;






const SummaryPage = ({ userId, month }) => {
  const dispatch = useDispatch();
  const { groupedMonthlyExpenses, status, error } = useSelector(
    (state) => state.expenses
  );

  useEffect(() => {
    if (userId && month) {
      dispatch(fetchMonthlySummaryData({ userId, month }));
    }
  }, [userId, month, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  // Generate a full month (e.g., 1st to 31st)
  const generateFullMonth = (month) => {
    const date = new Date(month);
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => {
      const day = String(i + 1).padStart(2, "0");
      return `${day}.${String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
    });
  };

  const fullMonthDates = generateFullMonth(month);

  return (
    <div className={styles.summaryContainer}>
      <h2 className={styles.title}>Expense Summary</h2>
      <table className={styles.summaryTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Groceries</th>
            <th>Transportation</th>
            <th>Utilities</th>
            <th>Healthcare</th>
            <th>Charity</th>
            <th>Miscellaneous</th>
          </tr>
        </thead>
        <tbody>
  {fullMonthDates.map((date) => (
    <tr key={date}>
      <td data-label="Date">{date}</td>
      <td data-label="HealthCare">
        {groupedMonthlyExpenses[date]?.HealthCare || "X"}
      </td>
      <td data-label="Utility">
        {groupedMonthlyExpenses[date]?.Utility || "X"}
      </td>
      <td data-label="Transportation">
        {groupedMonthlyExpenses[date]?.Transportation || "X"}
      </td>
      <td data-label="Miscellaneous">
        {groupedMonthlyExpenses[date]?.Miscellaneous || "X"}
      </td>
      <td data-label="Miscellaneous">
        {groupedMonthlyExpenses[date]?.Miscellaneous || "X"}
      </td>
      <td data-label="Miscellaneous">
        {groupedMonthlyExpenses[date]?.Miscellaneous || "X"}
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default SummaryPage;

