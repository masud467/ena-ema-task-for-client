"use client"
import { useDispatch, useSelector } from 'react-redux';
import styles from '../app/styles/ExpenseForm.module.css';
import { addExpense } from '@/lib/features/expenses/expensesSlice';
// import { useState } from 'react';

const ExpenseForm = () => {
 const dispatch= useDispatch();
//  const {error,loading}= useSelector(state=>state.expense);
//  const [alertMessage, setAlertMessage] = useState("");
//   const [alertType, setAlertType] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const expenseData = {
      category: formData.get("category"),
      purpose: formData.get("purpose"),
      amount: parseFloat(formData.get("amount")),
      date: new Date().toLocaleString(),
    } 
    
    dispatch(addExpense(expenseData))
    // .unwrap()
    //   .then((response) => {
    //     setAlertMessage("Expense added successfully!");
    //     setAlertType("success");
    //   })
    //   .catch((err) => {
    //     setAlertMessage(err.message || "Spending limit exceeded!");
    //     setAlertType("error");
    //   });

      // setTimeout(() => {
      //   setAlertMessage("");
      //   setAlertType("");
      // }, 2000);
    console.log(expenseData);
  }
  
  return (
    <div className={styles.formContainer}>
      {/* {alertMessage && (
        <div
          className={`${styles.alert} ${
            alertType === "success" ? styles.success : styles.error
          }`}
        >
          {alertMessage}
        </div>
      )} */}
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
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          className={styles.input}
          placeholder="E.g., 50"
          required
        />

        <button type="submit" className={styles.button} >
      Add Expense
        </button>
      </form>
      
    </div>
  );
};

export default ExpenseForm;
