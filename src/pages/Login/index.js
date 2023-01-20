import React from "react";
import Button from "../../components/atoms/Button";
import TextInput from "../../components/atoms/TextInput";
import Header from "../../components/molecules/Header";
import { useDispatch } from "react-redux";
import { useForm } from "../../utils";

const Login = ({ navigation }) => {
  // const dispatch = useDispatch();
  // //grouping form menjadi satu object
  const [form, setForm] = useForm({
    phone_number: "",
  });
  const onSubmit = () => {
    console.log(form);
    const obj = {
      form,
      navigation: navigation,
    };
    // dispatch(signInAction(obj));
  };
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex flex-col items-center justify-center px-40 py-40">
        <p className="text-3xl p-10">Personal account for bussiness</p>
        <div className="flex items-center justify-start rounded-2xl px-10 py-10  w-5/12 border shadow-lg">
          <TextInput
            placeholder="Phone number"
            lable="Phone number"
            type="text"
            className="w-full"
            value={form.phone_number}
            onChange={(e) => setForm("phone_number", e.target.value)}
          />
          <Button className="bg-blue-600" onClick={onSubmit}>
            Next
          </Button>
        </div>

        <div className="flex flex-row items-center justify-center p-4 gap-2">
          <p className="text-sm text-">Don't have account yet? </p>
          <button
            className="text-blue-500 background-transparent underline underline-offset-1 font-bold  text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Sign up
          </button>
        </div>

        <div className="flex flex-row items-center justify-centerg gap-1 ">
          <TextInput type="checkbox" />
          <p className="text-xs ">I agree with</p>
          <button
            className="text-blue-500 background-transparent underline underline-offset-1 font-bold  text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Term and condition
          </button>
          <p className="text-xs ">and</p>
          <button
            className="text-blue-500 background-transparent underline underline-offset-1 font-bold  text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Privacy and policy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
