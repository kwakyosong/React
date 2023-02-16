import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width:768px) { 
        width: 100px;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const NewsList = ( {category,totalResult}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
        const fetchData = async() =>{ 
            setLoading(true);
            try { 
                const query = category === 'all' ? '' : `&category=${category}`
                const fullUrl = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=00fa3476cfad483c8955e0e4b890cd5d`
                console.log(fullUrl);
                const response = await axios.get(fullUrl)
                setArticles(response.data.articles);
                console.log(response.data.articles.length)
                totalResult(response.data.totalResults)
            } catch(e) { 
                console.log(e);
            }
            setLoading(false);
        }
        fetchData();
    },[category]);
    
    if (loading) { 
        return <NewsListBlock>대기중...</NewsListBlock>
    }


    if (!articles) { 
        return null;
    }

    return (
        <NewsListBlock>
            {articles.map((article,index) => (
                <NewsItem key={index} article={article} />
            ))}
        </NewsListBlock>
    );
};

export default NewsList;