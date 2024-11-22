import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Обработчик изменения имени пользователя
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    // Обработчик изменения пароля
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Обработчик отправки формы логина
    const handleLogin = (e) => {
        e.preventDefault();

        // Получаем данные пользователя из localStorage
        const userData = JSON.parse(localStorage.getItem(username));

        // Проверяем, существует ли пользователь с таким username
        if (!userData) {
            alert('Пользователь не найден');
            return;
        }

        // Проверяем пароль
        if (userData.password !== password) {
            alert('Неверный пароль');
            return;
        }

        // Если данные верные, то успешно авторизуем и перенаправляем на главную страницу
        alert('Вход успешен!');
        navigate('/mainpage'); // Перенаправляем на главную страницу (или другую нужную страницу)
    };

    return (
        <div>
            <h2>Вход</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;
