import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Registration.module.scss'
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

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        const existingUser = localStorage.getItem(formData.username);
        if (existingUser) {
            alert('Пользователь с таким именем уже существует');
            return;
        }

        localStorage.setItem(formData.username, JSON.stringify(formData));

        alert('Регистрация прошла успешно!');
        
        navigate('/login');
    };

    return (
        <div className="container__main">
        <div className={s.div}>
            <h2 className={s.h2} >Регистрация</h2>
            <form   onSubmit={handleRegister}>
                <div className={s.form}>

                    
                <div>
                    <label  htmlFor="firstName">
                        <p>Имя</p>
                    <input  className={s.input}
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        // required
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="lastName">
                        <p>Фамилия</p>
                    <input  className={s.input}
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        // required
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="hobby">
                        <p>Хобби</p>
                    <input className={s.input}
                        type="text"
                        id="hobby"
                        name="hobby"
                        value={formData.hobby}
                        onChange={handleChange}
                        // required

                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="education">
                        <p>Образование/Работа</p>
                    <input className={s.input}
                        type="text"
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        // required

                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="username">
                        <p>Имя пользователя</p>
                    <input className={s.input}
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        // required
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        <p>Пароль</p>
                    <input className={s.input}
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    </label>
                </div>
                <div>
                    <label htmlFor="avatar">
                        <p>Ссылка на аватарку</p>
                    <input className={s.input}
                        type="text"
                        id="avatar"
                        name="avatar"
                        value={formData.avatar}
                        onChange={handleChange}
                    />
                    </label>
                </div>
                </div>

                <button className={s.btn} type="submit">Зарегистрироваться</button>
            </form>
        </div>
        </div>
    );
};

export default Registration;
