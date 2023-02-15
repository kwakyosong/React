import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Say = ( props ) => {
    const [message,setMessage] = useState('');

    const onClickEnter = () => setMessage('안녕하세요!!' + props.children);
    const onClickLeave = () => setMessage('안녕히 가세요!' + props.children);

    return (
        <div>   
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1>111 {message}</h1>
        </div>
    );
};

Say.propTypes = {
    
};

export default Say;