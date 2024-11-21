


import React from 'react';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.footer_wrapper}>
        <h1 className={s.footer_title}>StuDent ChaT</h1>

        <div className={s.contact_section}>
          <div className={s.contact}>
            <h2 className={s.contact_title}>Контакты</h2>
            <img
              src="/path/to/your/image.png"
              alt="Контакты"
              className={s.contact_img}
            />
          </div>

          <div className={s.email}>
            <h3 className={s.email_title}>Электронная почта:</h3>
            <a href="mailto:example@gmail.com" className={s.email_link}>
              example@gmail.com
            </a>
          </div>
        </div>

        <div className={s.social_login_icons}>
          {/* Социальные иконки */}
          <div className={s.socialcontainer}>
            <div className={`${s.social_icon_1} ${s.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={`${s.social_icon_2} ${s.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M391.2 78.5c-70.1 65.5-105 122.5-87 195.5 25.6-90.1 159.6 16.7 159 151.1C234.6 385.4 242 166.3 391.2 78.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={`${s.social_icon_3} ${s.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M219.8 47.7h83.8c36.6 1.6 53.5 23.6 58.6 50.8h-90l84.5 193.1h-91.8l-79.1-150.6H216Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={`${s.social_icon_4} ${s.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M159.8 41.7c80.7-2 132.4 67.3 132.5 151.8-86.8 4.2-135.2-58-132.5-151.8ZM0 39.3h51.8L-14 190c92.3-5.8 133.8-76.4 134-160.7H0V39.3Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className={`${s.social_icon_5} ${s.icon}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 76c110.3 0 200 89.7 200 200S366.3 476 256 476 56 386.3 56 276 145.7 76 256 76Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
