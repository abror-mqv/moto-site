import React from 'react';
import Image from 'next/image'
import Button from '@mui/material'
import nasway from './Balc.module.scss'
import Title from '../../../fabric/Title/Title';


const Balc = (props) => {
    return (
        <Button clvassName={nasway.Balc}>
            <img src={props.image} alt={props.title}/>
            <div className={nasway.TextBlock}>
                <Title content={props.title}/>
                
            </div>
        </Button>
    );
};

export default Balc;