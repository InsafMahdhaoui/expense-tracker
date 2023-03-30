//initialiser un store Redux:
import { configureStore } from "@reduxjs/toolkit";
import { expenseSlice } from "./expense/expense-slice";
import { authSlice } from "./auth/auth-slice";
//la configuration minimale de notre store
const store = configureStore({
  //reducer est a zone où on va définir toutes les données pour notre store.
  reducer: {
    // "EXPENSE" est la cles de base pour notre expense slice, il contient les donneees de notre slice qui viennent se mettre à jour.
    EXPENSE: expenseSlice.reducer, //expenseSlice.reducer permet de verifier si quelque chose a changé dans ma slice et le mettre ajour dans cette cles
    AUTH: authSlice.reducer,
  },
});

export { store };
