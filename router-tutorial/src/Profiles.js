import React from 'react';

const data = { 
    velopert : { 
        name: 'velopert',
        description : '리액트를 좋아하는 개발자'
    }, 
    gildong : {
        name: 'gildong',
        description : '고전 소설 홍길동전의 주인공'
    }
}

const data2 = [
    {name:'aaa',description:'aaa설명'} , 
    {name:'bbb',description:'bbb설명'}
]

const Profiles = () => {
    return (
        <div>
            <h1>{data.velopert.name}</h1>
        </div>
    );
};

export default Profiles;