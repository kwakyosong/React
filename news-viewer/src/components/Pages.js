import React from 'react';
import styled , {css} from 'styled-components';
import { NavLink } from 'react-router-dom'

const PageBlock = styled.div`
    display: flex; 
    padding: 1rem;
    width: 80%;
    margin: 0 auto;
    @media screen and (max-width: 768px) { 
        width: 100%;
        overflow-x: auto;
    }
`;

const Page = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer; 
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover { 
        color: #495057
    }

    &.active { 
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color : #22b8cf;
        &:hover { 
            color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

function repeatPage(maxPage,category) { 
    let arr = [];
    console.log('category = ' + category)
    for(let i=1;i<= maxPage;i++) { 
        var queryStr = category + '?' + i;
        arr.push(
            <Page key={`${i}`}
                  className="active"
                  to={`${queryStr}`}
            >{i}</Page>
        )
    }
    return arr;
}


const Pages = ({maxPage, maxArticle,category}) => {

    return (
        <PageBlock>
            {repeatPage(maxPage,category)}
        </PageBlock>
    );
};

export default Pages;