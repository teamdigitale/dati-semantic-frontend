import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div id="page-front">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
