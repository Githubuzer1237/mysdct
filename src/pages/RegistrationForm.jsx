import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        hobby: '',
        education: '',
        username: '',
        password: '',
        avatar: ''
    });

    const navigate = useNavigate();

    // Обработчик изменения данных в форме
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Обработчик отправки формы регистрации
    const handleRegister = (e) => {
        e.preventDefault();

        // Проверка на существование пользователя с таким же username
        const existingUser = localStorage.getItem(formData.username);
        if (existingUser) {
            alert('Пользователь с таким именем уже существует');
            return;
        }

        // Сохраняем данные нового пользователя в localStorage
        localStorage.setItem(formData.username, JSON.stringify(formData));

        alert('Регистрация прошла успешно!');
        
        // После регистрации сразу авторизуем пользователя и перенаправляем на главную страницу
        navigate('/login');
    };

    return (
        <div>
            <h2>Регистрация</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="firstName">Имя:</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Фамилия:</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="hobby">Хобби:</label>
                    <input
                        type="text"
                        id="hobby"
                        name="hobby"
                        value={formData.hobby}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="education">Образование/Работа:</label>
                    <input
                        type="text"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="avatar">Ссылка на аватарку:</label>
                    <input
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
};

export default Registration;
