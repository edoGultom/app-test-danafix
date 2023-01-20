import "../src/styles/tailwind.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Pengajuan } from "./pages";
import configStore from "./redux/store";

const { store } = configStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
