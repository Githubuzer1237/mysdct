import React from 'react'
import s from './Header.module.scss'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>

<header className={s.header}>
        <div className="container__main">
            <nav className={s.nav}>
                <div className={s.logo}>
                    <h1 className={s.h1__logo}>StuDent ChaT</h1>
                </div>

                <div className={s.links}>
                    <Link to={'/'}>Главная</Link>
                     <a href="">Группа</a>
                   <div className={s.news}>
                    <li className={s.drop}><a href="">Новости</a>
                        <div className={s.dropdown_menu}>
                            <ul className={s.drop__2}>
                                <li><a href="#">Все новости</a></li>
                                <li><a href="#">Общество</a></li>
                                <li><a href="#">Технологии</a></li>
                                <li><a href="#">Культура</a></li>
                                <li><a href="#">Спорт</a></li>
                            </ul>
                        </div>
                  </li>
                </div>  
                <Link to={'/Teacher'}>Учителя</Link>
                     <a href="">Регистрация/Войти</a>
                </div>
            </nav>
        </div>
    </header>

    </>
  )
}

export default Header