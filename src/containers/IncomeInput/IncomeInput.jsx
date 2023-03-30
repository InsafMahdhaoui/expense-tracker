import { useDispatch, useSelector } from "react-redux";
import { setIncome } from "store/expense/expense-slice";
import s from "./style.module.css";

export function IncomeInput(props) {
  const income = useSelector(store => store.EXPENSE.income); //income va prendre la valeur 1000 comme valeur par defaut depuis le store dans expense-slice
  //La vaeur de ncome va se mettre a jour des que l'utilisateur tape un autre valeur comme income
  const dispatch = useDispatch();
  function updateIncome(e) {
    const income = e.target.value;
    //on ne peut pas appeler une action par "setIncome(income)" mais il faut le dispatcher
    dispatch(setIncome(income));
  }
  return (
    <div className="row justify-content-center mb-2">
      <div className={`col-6 ${s.label}`}>Income</div>
      <div className="col-6">
        <input
          defaultValue={income}
          onChange={updateIncome}
          type="number"
          className="form-control"
          placeholder="Exp: 3000"
        />
      </div>
    </div>
  );
}
