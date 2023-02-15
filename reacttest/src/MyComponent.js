import React from 'react';

const MyComponent = ({name , children}) => {
    return (
        <div>
            <h1>{name} 나의 새롭고 멋진 컴포넌트!!! {children}</h1>
        </div>
    );
};

MyComponent.defaultProps = { 
    name : '이건 Default'
}

export default MyComponent;