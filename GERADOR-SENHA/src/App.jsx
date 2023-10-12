import { useState } from 'react'
import Generate from './hooks/Gerar'


function App() {
  const [ TextCopy, setCopy] = useState("copiar")
  const {PassWord, generatePassWord} = Generate()

  const copyToCLip = () => {
    window.navigator.clipboard.writeText(PassWord)
    setCopy("copiado")
  }
  const reset = () =>{
   generatePassWord()
    setCopy("copiar")

  }
  
   return(
    <div className='Princ'>
    <h3>Gerador de Senha</h3>
    <button onClick={reset}>Gerar Senha</button>
    <button onClick={copyToCLip}>{TextCopy}</button>
    <div>
      {PassWord}
    </div>
  </div>
);
    

   
}

export default App
