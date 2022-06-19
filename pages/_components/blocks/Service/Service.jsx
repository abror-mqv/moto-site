/* eslint-disable react/jsx-key */
import React from 'react';
import Cunt from '../../fabric/Cunt/Cunt';
import nasway from './Service.module.scss'
import Balc from './_components/Balc';

import Bike1 from './_components/Bike1.png'
import Bike2 from './_components/Bike2.png'
import Bike3 from './_components/Bike3.png'

const data = [
    {
        image: Bike1,
        title: "МОТОКУРС “БАЗОВЫЙ”",
        text: "Короткое описание курса. Для кого, зачем, какие преимущества и результаты получит обучающийся."
    },
    {
        image: Bike2,
        title: "МОТОКУРС “ПРОФИ”",
        text: "Короткое описание курса. Для кого, зачем, какие преимущества и результаты получит обучающийся."
    },
    {
        image: Bike3,
        title: "“МОТОДЖИМХАНА”",
        text: "Короткое описание курса. Для кого, зачем, какие преимущества и результаты получит обучающийся."
    },
    
]

const renderList = data.map(course => {
    return(
        <Balc title={course.title} image={course.image} text={course.text}/> 
    )
})


const Service = () => {
    return (
        <section className={nasway.Service}>
            <Cunt content="Услуги" />
            <div>
                {renderList}
            </div>          
        </section>
    );
};

export default Service;