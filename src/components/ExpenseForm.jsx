"use client";
import { useDispatch } from "react-redux";
import styles from "../app/styles/ExpenseForm.module.css";
import { addExpense } from "@/lib/features/expenses/expensesSlice";
import { useState } from "react";

const ExpenseForm = () => {
  const dispatch = useDispatch();
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const expenseData = {
      category: formData.get("category"),
      purpose: formData.get("purpose"),
      amount: formData.get("amount"),
      userId: formData.get("userId"),
      date: new Date().toLocaleString(),
    };

    if (!expenseData.category || !expenseData.purpose || !expenseData.amount || !expenseData.userId) {
      setAlert({
        type: "error",
        message: "Failed to add expense. Details: All fields are required"
      });
      return;
    }

    try {
      // Simulate a backend call (Replace this with the actual Redux action call)
      const response = await dispatch(addExpense(expenseData)).unwrap();

      if (response?.message) {
        setAlert({ type: "success", message: response.message });
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      console.log('Error details:', {
        error,
        status: error?.response?.status,
        data: error?.response?.data,
        message: error?.message
      });
      setAlert({
        type: "error",
        message: `Failed to add expense. Details: ${
          error.response?.data?.message || 
          error.message || 
          "Server connection error - please try again"
        }`,
      });
    }

    event.target.reset();
  };
  const closeAlert = () => setAlert({ type: "", message: "" });
  return (
    <div className={styles.formContainer}>
      <form className={styles.expenseForm} onSubmit={handleSubmit}>
        <h2>Add Expense</h2>
        {/* Alert Box  */}
        {alert.message && (
          <div
            className={`${styles.alert} ${
              alert.type === "success" ? styles.success : styles.error
            }`}
          >
            <span>{alert.message}</span>
            <button onClick={closeAlert} className={styles.closeButton}>
              &times;
            </button>
          </div>
        )}
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
        <label htmlFor="userId">User ID</label>
        <input
          type="text"
          id="userId"
          name="userId"
          className={styles.input}
          placeholder="Your User ID"
          required
          onInput={(e) => {
            e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Allow only letters and spaces
          }}
          title="User ID can only contain letters."
        />
        <button type="submit" className={styles.button}>
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
