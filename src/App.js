import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Components/Home";
import { EditorPage } from "./Components/EditorPage";
import { Routess } from "./AllRoutes/Routess";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster
        position="top-right"
        toastOptions={{
          Success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      ></Toaster>
      <Routess />
    </div>
  );
}

export default App;
