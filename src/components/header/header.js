import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

import './header.css'
import MyInput from '../UI/input/MyInput'
import MyButton from '../UI/button/MyButton'

const Header = () => {
  const [search, setSearch] = useState('')

  return (
    <div className="header">
      <div className="logo" >
        <svg className="logo-svg" width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M36.0218 20.132L11.8079 34.8889C13.76 35.6075 15.8708 36 18.0736 36C27.3311 36 34.9629 29.0683 36.0218 20.132ZM8 32.947C3.17469 29.7151 0 24.2268 0 18C0 11.7732 3.17469 6.28493 8 3.05296V32.947ZM10.8156 1.51023C13.037 0.539024 15.4921 0 18.0736 0C27.6944 0 35.5595 7.48655 36.1158 16.9292L10.8156 1.51023Z" fill="#E5261E" />
        </svg>
        <div className="logo-text">Видеосервис</div>
      </div>

      <div>
        <MyInput
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск..."
        />
      </div>
      <div className="">Найти</div>
      <MyButton>Войти</MyButton>
    </div>
  );
};

export default Header;