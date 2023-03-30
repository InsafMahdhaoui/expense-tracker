import { addExpense } from "store/expense/expense-slice";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export function ExpenseInput(props) {
  /*pour qu'on puisse appeler une action  il faut emettre l 'evenement car en vrai une action est une evenement
  pour emmetre l'event il faut utiliser un hook (dispatch)*/
  const dispatch = useDispatch(); //c a d emmet l'evenement stp
  //la fonction submit a le role de recuperer les informations du formulaire
  function submit(e) {
    //eviter le rafraichissement de l'app lors de fonction submit
    e.preventDefault();
    //recuperer les donnees du formulaires
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const price = formData.get("price");
    console.log("*", name, price);
    //et ici on fait comme dire qu'on veut Appeler addExpense
    dispatch(addExpense({ name, price }));
  }
  return (
    <form onSubmit={submit}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-5 col-md-4 col-lg-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder='Exp : "Apple"'
            name="name"
          />
        </div>
        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Exp: 3.99"
            name="price"
          />
        </div>

        <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
          <button type="submit" className={`btn btn-primary ${s.btn}`}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
