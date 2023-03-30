import { ExpenseInput } from "containers/ExpenseInput/ExpenseInput";
import { List } from "components/List/List";
import { IncomeInput } from "containers/IncomeInput/IncomeInput";
import { useSelector } from "react-redux";
import { ExpenseTotal } from "containers/ExpenseTotal/ExpenseTotal";
import { Logo } from "components/Logo/Logo";
import s from "./style.module.css";

export function App() {
  const expenseList = useSelector(store => store.EXPENSE.expenseList); //Pour acceder au store: lire les donnees de notre slice depuis notre store (le tableau ExpenseList)
  console.log("**", expenseList);
  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title="ISpent" subtitle="Track your expenses" />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={expenseList} />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
        </div>
      </div>
    </div>
  );
}
