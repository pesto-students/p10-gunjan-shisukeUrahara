import { Provider } from "react-redux";
import store from "./Store/index";
import Form from "./Components/Form/Form";
import WorkoutPlan from "./Components/WorkoutPlan/WorkoutPlan";

import "./App.css";

function App() {
  return (
    <div class="app">
      <Provider store={store}>
        <Form />
        <WorkoutPlan />
      </Provider>
    </div>
  );
}

export default App;
