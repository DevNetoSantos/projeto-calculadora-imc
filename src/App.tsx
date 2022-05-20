import style from './App.module.css';
import imageLogo from './assets/images/powered.png';

const App = () => {
  return(
    <div className={style.main}>
      <header>
        <div className={style.headerContainer}>
          <img src={imageLogo} alt="logo do site" width={150}/>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.leftSide}>
          ...
        </div>
        <div className={style.rigthSide}>
          ...
        </div>
      </div>
    </div>
  );
}

export default App
