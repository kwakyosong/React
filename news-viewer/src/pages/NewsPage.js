import React , { useState} from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import Pages from '../components/Pages';

const NewsPage = ( {match,location }) => {
    const [maxPage, setMaxPage] = useState(0);
    const [maxArticle, setMaxArticle] = useState(0);

    const category = match.params.category || 'all';
    console.log('match = ' + JSON.stringify(match))
    console.log('location = ' + JSON.stringify(location))

    const totalResult = (totalCnt) => { 
        var maxPage = Math.floor(totalCnt / 20) + 1; 
        console.log('maxPage = '+maxPage + ':' + 'totalCnt = ' + totalCnt);
        setMaxPage(maxPage);
        setMaxArticle(totalCnt);
    }

    const onSelect2 = (curPage) => { 
        console.log('curPage = ' + curPage);
    }

    return (
        <div>
            <Categories />
            <Pages maxPage={maxPage} maxArticle={maxArticle} category={category}/>
            <NewsList category={category} totalResult={totalResult} />   
        </div>
    );
};

export default NewsPage;