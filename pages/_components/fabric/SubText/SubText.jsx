import React from 'react';
import nasway from './SubText.module.scss'

const SubText = (props) => {
    return (
        <p className={nasway.SubText}>
          {props.content}  
        </p>
    );
};

export default SubText;