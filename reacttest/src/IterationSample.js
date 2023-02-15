import React , { useEffect,useState }from 'react';

const IterationSample = () => {
    const [names , setNames] = useState([
        {id:1 , text :'눈사람'} , 
        {id:2 , text :'얼음'} ,
        {id:3 , text :'눈'} , 
        {id:4 , text :'바람'}
    ]);

    const [inputText,setInputText] = useState('');
    const [nextId,setNextId] = useState(names.length+1);
    useEffect(()=> { 
        console.log('렌더링이 완료되었습니다');
        console.log(names);
    },[nextId]);

    const onChange = (e) => { setInputText(e.target.value) }

    const onClick = () => { 
        const nextNames = names.concat( { id:nextId, text:inputText } );
        setNextId(nextId + 1);
        setNames(nextNames); // 배열전체를 업데이트 한다.
        setInputText('');
    }

    const onDblClick = (id) => { 
        const nextNames = names.filter(name => name.id !== id)
        setNames(nextNames);
    }
    // const names = [ '눈사람' , '얼음' , '눈' , '바람' ];
    const nameList = names.map( (name) => { 
    //    return (<li key={name.id}>{name.text}</li>)
        return (<li key={name.id} onDoubleClick={() => { onDblClick(name.id) }}>{name.text}</li>)
    })
    // const nameList = names.map( name => <li>{name}</li> )
    return (
        <div>
            <input type='text' value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;