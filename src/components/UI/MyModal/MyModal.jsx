import React from 'react';
import classes from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    const modalClasses = [classes.myModal];

    if(visible) {
        modalClasses.push(classes.active);
    }

    return (
        <div onClick={() => setVisible(false)} className={modalClasses.join(' ')}>
            <div onClick={event => event.stopPropagation()} className={classes.myModalContent}>
                <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Создание нового поста</h2>

                {children}
            </div>
        </div>
    );
};

export default MyModal;