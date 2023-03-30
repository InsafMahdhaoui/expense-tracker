import { createSlice } from "@reduxjs/toolkit";
//initialisation d'un slice
export const expenseSlice = createSlice({
  name: "expenseSlice",
  initialState: {
    income: 1000,
    expenseList: [],
  },
  //creer une action pour envoyer les donnees recuperees du formulaire a notre slice
  reducers: {
    addExpense: (currentSlice, action) => {
      //la 2eme parametre "action" contient les donnees de l'objet de notre slice(name et price)
      currentSlice.expenseList.push({
        ...action.payload,
        price: Number.parseFloat(action.payload.price),
      }); //action.payload contient les vraix donnees qu'on veut evoyer
      console.log("addExpense()", action);
    },
    //nouvelle action pour modifier la valeur de income
    setIncome: (currentSlice, action) => {
      currentSlice.income = Number.parseFloat(action.payload); //pour convertir la valeur de income en number
    },
  },
});
//stocker nos actions (maintenant nous avons que addExpense) dans un const pour qu'on puisse y acces via expensSlice.actions
const { addExpense, setIncome } = expenseSlice.actions;
//exporter nos actions
export { addExpense, setIncome };
