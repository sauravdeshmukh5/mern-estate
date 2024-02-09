import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {connect, useDispatch } from 'react-redux'
import {AppDispatch, RootState} from '../redux/store.ts';
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice.ts";
import OAuth from "../component/OAuth.tsx";

type SigninProps = ReturnType<typeof mapStateToProps>;

function Singin(props:SigninProps) {
  const dispatch :AppDispatch= useDispatch()
  const [formdata, setFormData] = useState({});
  const navigate=useNavigate();
  console.log(props.user.currentUser)
  const handleChange = (e: any) => {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  const handleSumbit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message))
        return;
      }
      dispatch(signInSuccess(data))
      navigate('/')
    } catch (error:any) {
      dispatch(signInFailure(error.message))
      
    }
   
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
        disabled={props.user.loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          onClick={handleSumbit}
        >
          {props.user.loading ? 'loading...':"Sign In"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont' have an account?</p>
        <Link to="/sign-up" className="text-blue-700">
          Sign Up
        </Link>
      </div>
      {props.user.error && <p className="text-red-500 mt-5">{props.user.error}</p> }
    </div>
  );
}

function mapStateToProps(state: RootState) {
  return {
    user: state.user};
}
export default connect(mapStateToProps)(Singin);

