import "./global.css";
import { App } from "./App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "store"; /* on n'a pas besoins de faire "./store" car comme on est en src et que
mon fichier de "jsconfig" indique qu'on est dans source. donc maintenant mon projet sait automatiquement que store il doit aller le chercher.
En dessous de sources*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //provider est un composant redux qui va nous donner l'access a redux
  <Provider store={store}>
    <App />
  </Provider>,
);
