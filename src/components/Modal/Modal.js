import React, {useState} from 'react';
import styles from './Modal.module.css';
import Title from '../Title/Title';
import Button from '../Button/Button';

const Modal = (props) => {

        const {name,email, flower, message} = props;
        const [closeModal, setCloseModal] = useState(true);

        return(
            <div className={styles.modal}>
            <Title title="Contact Information" />
            <div>Name:{name}
            <br></br>
            Email:{email}
            <br></br>
            Favourite Flower:{flower}
            <br></br>
            Message:{message}</div>


            <Button handleClick={() => setCloseModal(!closeModal)} buttonName="Close"/>

            {closeModal ? ( ""
            ) : ( console.log("Open modal")
            )}
            </div>
        )

}

export default Modal;