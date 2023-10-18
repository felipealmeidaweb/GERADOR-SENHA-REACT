import { useState } from 'react'
import Generate from './hooks/Gerar'
import Input from './hooks/Input'


function App() {
  const [ TextCopy, setCopy] = useState("copiar")
  const {PassWord, generatePassWord,passwordSize, setpasswordSize,ShowInput,setShowInput,sizeDefault} = Generate()



 

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
    <div>
      <label htmlFor="ShowInput"> costumizar tamanho</label>
      <input type="checkbox"
      id='ShowInput'
      value={ShowInput}
      onChange={() =>setShowInput(show => !show )}/>
    </div>
    {ShowInput ? (
      <div>
        <label htmlFor="passwordSize">Tamanho</label>
        <Input passwordSize={passwordSize} setpasswordSize={setpasswordSize}/>
      </div>

    ) : null}
    
    <button onClick={reset}>Gerar Senha de {sizeDefault} caracteres</button>
    <button onClick={copyToCLip}>{TextCopy}</button>
    <div>
      {PassWord}
    </div>
  </div>
);
    

   
}

export default App
