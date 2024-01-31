"use client";
import { useState } from "react";
import { logIn, logOut, toggleModerator } from "@/redux/features/auth-slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";

export default function LogIn() {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const onClickLogin = () => {
    dispatch(logIn(userName));
  };
  const onClickLogOut = () => {
    dispatch(logOut());
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUserName(e.target.value)} />
      <button onClick={onClickLogin}>Login</button>
      <button onClick={onClickLogOut}>LogOUt</button>
      <button onClick={onClickToggle}>Toggle</button>
    </div>
  );
}
