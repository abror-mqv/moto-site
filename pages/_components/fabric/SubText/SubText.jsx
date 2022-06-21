import React from 'react';
import nasway from './SubText.module.scss'

const styleProps = (props) => {
  if(props.black) return(nasway.SubTextBlack);
  if(props.modalka) return(nasway.GreenModalka);
  else return(nasway.SubText); 
}



const SubText = (props) => {
    return (
        <p className={styleProps(props)}>
          {props.content}  
        </p>
    );
};

export default SubText;