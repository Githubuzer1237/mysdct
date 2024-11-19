import React from 'react'
import s from './Header.module.scss'
const Header = () => {
  return (
    <>

<header class={s.header}>
        <div class={s.container_1}>
            <nav class={s.nav}>
                <div class={s.logo}>
                    <h1 class="h1__logo">StuDent ChaT</h1>
                </div>

                <div class={s.links}>
                     <a href="index.html">Главная</a>
                     <a href="group.html">Группа</a>
                   <div class={s.news}>
                    <li class={s.drop}><a href="news.html">Новости</a>
                        <div class={s.dropdown_menu}>
                            <ul class={s.drop__2}>
                                <li><a href="#">Все новости</a></li>
                                <li><a href="#">Общество</a></li>
                                <li><a href="#">Технологии</a></li>
                                <li><a href="#">Культура</a></li>
                                <li><a href="#">Спорт</a></li>
                            </ul>
                        </div>
                  </li>
                </div>  
                     <a href="">Учителя</a>
                     <a href="">Регистрация/Войти</a>
                </div>
            </nav>
        </div>
    </header>

    </>
  )
}

export default Header