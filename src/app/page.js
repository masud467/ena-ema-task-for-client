import ExpenseForm from "@/components/ExpenseForm";
import SpendingLimitModal from "@/components/SpendingLimitModal";

export default function Home() {
  return (
    <div>
      <div>
        <SpendingLimitModal></SpendingLimitModal>
      </div>

      <ExpenseForm></ExpenseForm>
    </div>
  );
}
