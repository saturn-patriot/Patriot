"use client"
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    const userData = { username, email };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleRegister = () => {
    const userData = { username, email };
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  if (!user) {
    return (
      <div className='auth'>
        <h2>Регистрация/Авторизация</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleLogin}>Войти</button>
          <button onClick={handleRegister}>Зарегистрироваться</button>
        </form>
      </div>
    );
  }

  return (
    <div className='profile'>
      <div className="page__container">
        <h1 className="user">{user.username}</h1>
        <p className="stars">0</p>
        <button onClick={handleLogout}>Выйти</button>
      </div>
    </div>
  );
}   