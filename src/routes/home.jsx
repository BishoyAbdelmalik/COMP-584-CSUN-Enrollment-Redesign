import React from 'react';
import logo from './../logo.svg';
import { Counter } from './../features/counter/Counter';
import style from './../App.module.scss';

const Home = () => {
    return ( <div className={style.App}>
        <header className={style.AppHeader}>
          <img src={logo} className={style.AppLogo} alt="logo" />
          <Counter />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className={style.AppLink}
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className={style.AppLink}
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className={style.AppLink}
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className={style.AppLink}
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div> );
}
 
export default Home;