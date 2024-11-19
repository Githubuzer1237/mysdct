import React from 'react'
import s from './TeacherHero.module.css'
import TeacherCard from '../TeacherCard/TeacherCard'
const TeacherHero = () => {
  return (
   <>
           <section class={s.teacher}>
            <div class={s.adaptivrotebal}>
                <h1 class={s.teacher__title}>Учителя</h1>

                <div class={s.teacher__wrapper}>
                  <div class={s.teacher__cards}>

                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />
                     <TeacherCard />



                   
                  </div>
                </div>
            </div>
           </section>
   </>
  )
}

export default TeacherHero