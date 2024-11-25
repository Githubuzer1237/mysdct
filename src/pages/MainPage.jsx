import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const username = localStorage.getItem('loggedInUsername');
        if (!username) {
            navigate('/login'); 
        } else {
            const user = JSON.parse(localStorage.getItem(username));
            setUserData(user);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('loggedInUsername'); 
        navigate('/login'); 
    };

    return (
        <div>
            {userData ? (
                <div>
                    <h2>Добро пожаловать, {userData.firstName}!</h2>
                    <p>Имя: {userData.firstName}</p>
                    <p>Фамилия: {userData.lastName}</p>
                    <p>Хобби: {userData.hobby}</p>
                    <p>Образование/Работа: {userData.education}</p>
                    <p>Аватарка: <img src={userData.avatar} alt="Аватарка" width="100" /></p>
                    <button onClick={handleLogout}>Выйти</button>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default MainPage;
