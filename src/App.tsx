import style from './App.module.css';
import imageLogo from './assets/images/powered.png';
import { useState } from 'react';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weghtField, setWeightField] = useState<number>(0);

  const buttonCalc = () => {
    if(heightField && weghtField) {

    } else {
      alert('ERROR')
    }
  }

  return(
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={imageLogo} alt="logo do site" width={150}/>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftSide}>
          <h1>Calcule seu IMC</h1>
          <p>
          O índice de massa corporal é uma medida internacional usada para calcular se uma pessoa está no peso ideal.
          </p>

          <input 
            type="number" 
            placeholder='Digite Sua Altura.'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />

          <input 
            type="number" 
            placeholder='Digite Seu Peso.'
            value={ weghtField > 0 ? weghtField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          
          <button onClick={buttonCalc}>Calcular</button>
        </div>
        <div className={style.rigthSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default App
