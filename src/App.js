import "../src/styles/tailwind.css";
import { Provider, useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Router,
  redirect,
} from "react-router-dom";
import { Dashboard, Login, Pengajuan } from "./pages";
import configStore from "./redux/store";

const { store } = configStore();

const MainApp = () => {
  const phone = useSelector((state) => state.signReducer.phone_number);
  console.log(phone);
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/"
          element={phone.length > 0 ? <Pengajuan /> : <Login />}
        /> */}
        <Route path="/" element=<Pengajuan /> />
      </Routes>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;
