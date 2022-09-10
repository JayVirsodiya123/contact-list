import React from 'react';
import './Avatar.scss';

function Avatar(props) {

    

    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return "#" + randomColor;
    }
    const size = props.size || 10;
    const fontSize =  props.fontSize || 16;

    const generateInitials = (initials) => {
       
        const initialsArray = initials.split(' ');
        let initial = '';
       
        if(initialsArray.length){
            initialsArray.forEach((ele, index)=> {
                 if(index <= 1) {
                    initial += ele.charAt(0);
                 }
                    
            });
        }
        return initial ? initial.toUpperCase() : 'U';
    }

    

    return (
        <div className='avatar-container'>
            {
                props.initials &&
                <div className='avatar' style={{ width: `${size}px`, height: `${size}px`, backgroundColor: generateColor(), fontSize: `${fontSize}px` }}>
                    {generateInitials(props.initials)}
                </div>
            }
        </div>
    );
}

export default Avatar;