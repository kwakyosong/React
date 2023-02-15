import React, {useState} from 'react';

const EventPractice = ({name}) => {
    const [message,setMessage] = useState('');
    const textInput = React.createRef();

    const onChangeMessage = (e) => { setMessage(e.target.value) }
    //const textinput = document.getElementById('textinput');

    return (
        <div>
            <h1>{name} {message} 입니다</h1>
            <input type='text' value={message} ref={textInput} 
             onChange={onChangeMessage} />

             <input type='button' value='초기화' onClick={()=>{
                textInput.current.value = ''
                setMessage('')
                textInput.current.focus()
             }} />
        </div>
    )
}

export default EventPractice;