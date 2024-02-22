import ReactDOM from "react-dom/client";
import MainProxy from "./MainProxy";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <MainProxy />
  </Provider>,
);
