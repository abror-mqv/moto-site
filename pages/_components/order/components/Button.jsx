import React from 'react';
import RegButton from '../../fabric/RegularButton/RegButton';

const Button = (props) => {
    return (
        <RegButton GreyStyle submit text={props.text} type="submit"/>
    );
};

export default Button;