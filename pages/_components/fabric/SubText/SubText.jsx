import React from 'react';
import nasway from './SubText.module.scss'

const styleProps = (props) => {
  if(props.black) return(nasway.SubTextBlack);
  // else if(props.biggreen) return(nasway.biggreen)
  // else if(props.errorwhite) return(nasway.errorwhite)
  // else if(trueFalse) return(nasway.black)
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