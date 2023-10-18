import { useState } from 'react';

export default function Generate() {
  const [PassWord, setPassWord] = useState("");
  const [passwordSize, setpasswordSize] = useState(); 
  const [ShowInput, setShowInput] = useState(false)
  const  sizeDefault = ShowInput ? passwordSize : 8


  const caracters = "1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?";

  const generatePassWord = () => {
    let NewPassword = "";

    for (let i = 0; i < sizeDefault; i++) {
      const position = Math.floor(Math.random() * caracters.length);
      NewPassword += caracters[position];
    }

    setPassWord(NewPassword);
  }

  return { PassWord, generatePassWord, passwordSize, setpasswordSize,ShowInput,setShowInput , sizeDefault}; // 
}