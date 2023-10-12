import { useState } from "react";

export default function Generate() {
  const [PassWord, setPassWord] = useState("");
  const caracters = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";
  const length = 12;

  const generatePassWord = () => {
    let NewPassword = "";

    for (let i = 0; i < length; i++) {
      const position = Math.floor(Math.random() * caracters.length);
      NewPassword += caracters[position];
    }

    setPassWord(NewPassword);
  }

  return { PassWord, generatePassWord }
}