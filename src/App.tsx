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
    </div>
  );
}

export default App
