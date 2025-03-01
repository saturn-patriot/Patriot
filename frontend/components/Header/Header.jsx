import React from 'react'
import "./Header.scss"
import Image from 'next/image'

export default function Header() {
  return (
    <div className='header'>
        <h1 className="header__logo">
            Logo
        </h1>
        <div className="header__nav">
            <a href="#">Главная</a>
            <a href="#">Категории</a>
            <a href="#">Форум</a>
        </div>
        <div className="header__searchAndprofile">
            <input type="text" name="search" placeholder='Поиск'/>
            <a href="#" className="header--notification">N</a>
            <p className="header--stars">999</p>
            {/* <Image src="" /> */}
            <div className="profile"></div>
        </div>
    </div>
  )
}
