"use client";
import { useAppSelector } from "@/redux/store";
import LogIn from "./login";

export default function Home() {
  const userName = useAppSelector((state) => state.authReducer.value.userName);
  const isModerator = useAppSelector((state) => state.authReducer.value.userName);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LogIn />
      <h2>Username : {userName}</h2>
      <h1>{isModerator && <> This is moderator</>}</h1>
    </main>
  );
}
