import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
// import App from "./App";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import "../src/styles/tailwind.css";
import { Login, Pengajuan } from "./pages";
import configStore from "./redux/store";
const { store } = configStore();

const MainRouter = () => {
  const phone_number = useSelector((state) => state.signReducer.phone_number);
  const router = createBrowserRouter([
    {
      path: "/",
      element: phone_number.length > 0 ? <Pengajuan /> : <Login />,
    },
    {
      path: "/pengajuan",
      element: <Pengajuan />,
    },
  ]);
  console.log(phone_number);

  return <RouterProvider router={router} />;
};
// const MainApp = () => {
//   const phone = useSelector((state) => state.signReducer.phone_number);
//   console.log(phone);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={phone.length > 0 ? <Pengajuan /> : <Login />}
//         />
//         <Route path="/" element=<Pengajuan /> />
//       </Routes>
//     </BrowserRouter>
//   );
// };
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <MainApp /> */}
    <MainRouter />
  </Provider>
);
