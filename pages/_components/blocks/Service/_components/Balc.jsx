import React from 'react';
import { Button } from '@mui/material';
import Title from '../../../fabric/Title/Title';
import nasway from './Balc.module.scss'
import SubText from '../../../fabric/SubText/SubText';

const Balc = (props) => {
    return (
        <Button className={nasway.Balc}>
            <img src={props.image.src} alt={props.title}/>
            <div>
                <Title black content={props.title} />
                <SubText black content={props.text}/>
            </div>
        </Button>
    );
};

export default Balc;