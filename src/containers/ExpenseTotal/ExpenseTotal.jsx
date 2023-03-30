import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  //pour avoir la somme totale "Total expenses" on lire le expenseList on accedant au store puis on lui applique
  const expenseList = useSelector(store => store.EXPENSE.expenseList);
  //recuperer notre income du store pour l'utiliser a la calcul du remainingMoney (solde restant)
  const income = useSelector(store => store.EXPENSE.income);
  //appliquer aux donnees recuperer ne fonction de calcul avec reduce pour avoir la somme de expenseList
  const totalExpenses = expenseList.reduce((acc, currentItem) => {
    return acc + currentItem.price;
  }, 0);
  //avoir le rest du solde en sustracter le totalExpense de income
  //on a utiliser le useSelector pour recuperer le income du store
  const remainingMoney = income - totalExpenses;
  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
