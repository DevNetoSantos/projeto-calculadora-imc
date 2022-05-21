import style from './App.module.css';
import imageLogo from './assets/images/powered.png';
import leftArrowImage from './assets/images/leftarrow.png';
import { useState } from 'react';
import { level, calImc, levels } from './helpers/imc';
import { GridItem } from './components/GridItem';

const App = () => {

  const [heightField, setHeightField] = useState<number>(0);
  const [weghtField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<level | null> (null);

  const buttonCalc = () => {
    if(heightField && weghtField) {
      setToShow(calImc(heightField, weghtField));
    } else {
      alert('ERROR')
    }
  }

  const handBack = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }

  return(
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={imageLogo} alt="logo do site" width={50}/>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftSide}>
          <h1>Calcule seu IMC.</h1>
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
          {!toShow &&
             <div className={style.grid}>
            {levels.map((item, key) => (
            <GridItem key={key} item={item}/>
            ))}
        </div>
          }
          {toShow &&
            <div className={style.rightBig}>
              <div className={style.rightArray} onClick={handBack}>
                <img src={leftArrowImage} alt="botão voltra" width={25} />
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App
