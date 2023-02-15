import React from 'react'

const ScrollBox = () => { 
    const box = React.createRef();
    const style = { 
        border: '1px solid black' ,
        height : '300px' , 
        width : '300px' , 
        overflow: 'auto' ,
        position : 'relative'
    }

    const innerStyle = { 
        width: '100%',
        height : '650px',
        background : ' linear-gradient(white,black)'
    }

    const scrollToBottm = () => { 
        const { scrollHeight, clientHeight} = box; 
        box.scrollTop = scrollHeight - clientHeight
    }

    return (
        <div style={style}
            ref={box}>
            <div style={innerStyle} />
        </div>
    )
}

export default ScrollBox