import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Header({mail, exit}) {
    return (
      <header className="header">
        <div className="header__logo" />
        <Routes>
          <Route path='/' element={
            <div className='header__log'>
              <p className='header__mail'>{mail}</p>
              <p className='header__condition' onClick={exit}>Выйти</p>
            </div>
          } />
          <Route path='/sign-in' element={
            <div className='header__log'>
              <Link to="/sign-up" className='header__condition'>Регистрация</Link>
            </div>
          } />
          <Route path='/sign-up' element={
            <div className='header__log'>
              <Link to="/sign-in" className='header__condition'>Войти</Link>
            </div>
          } />
        </Routes>
      </header>
    )
}