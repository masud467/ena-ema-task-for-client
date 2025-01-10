"use client";
import { useState } from "react";
import styles from "../app/styles/SpendingLimit.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postSpendingLimit } from "@/lib/features/spendingLimit/spendingLimitSlice";

const SpendingLimitModal = () => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.spendingLimit
  );
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSpendingLimit = (e) => {
    e.preventDefault();
    // Handle the spending limit submission here
    const formData = new FormData(e.target);
    const spendingLimitData = {
      userId: formData.get("userId"),
      monthlyLimit: formData.get("monthlyLimit"),
      groceries: formData.get("groceries"),
      transportation: formData.get("transportation"),
      utilities: formData.get("utilities"),
      healthcare: formData.get("healthcare"),
      charity: formData.get("charity"),
      miscellaneous: formData.get("miscellaneous"),
    };
    dispatch(postSpendingLimit(spendingLimitData));
    closeModal();

    console.log(spendingLimitData);
  };

  return (
    <div className={styles.container}>
      <button className={styles.openModalButton} onClick={openModal}>
        Set Monthly Spending Limits
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Set Monthly Spending Limits</h2>
            <form onSubmit={handleSpendingLimit}>
              <div className={styles.inputGroup}>
                <label htmlFor="monthlyLimit">
                  Total Monthly Spending Limits
                </label>
                <input
                  type="number"
                  id="monthlyLimit"
                  name="monthlyLimit"
                  placeholder="Enter Total Monthly Spending limit"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="userId">User ID</label>
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  placeholder="User ID"
                  required
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Allow only letters and spaces
                  }}
                  title="User ID can only contain letters."
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="groceries">Groceries</label>
                <input
                  type="number"
                  id="groceries"
                  name="groceries"
                  placeholder="Enter limit for Groceries"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="transportation">Transportation</label>
                <input
                  type="number"
                  id="transportation"
                  name="transportation"
                  placeholder="Enter limit for Transportation"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="utilities">Utilities</label>
                <input
                  type="number"
                  id="utilities"
                  name="utilities"
                  placeholder="Enter limit for Utilities"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="healthcare">Healthcare</label>
                <input
                  type="number"
                  id="healthcare"
                  name="healthcare"
                  placeholder="Enter limit for Healthcare"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="charity">Charity</label>
                <input
                  type="number"
                  id="charity"
                  name="charity"
                  placeholder="Enter limit for Charity"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="miscellaneous">Miscellaneous</label>
                <input
                  type="number"
                  id="miscellaneous"
                  name="miscellaneous"
                  placeholder="Enter limit for Miscellaneous"
                  required
                />
              </div>
              <div className={styles.buttons}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitButton}>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default SpendingLimitModal;
