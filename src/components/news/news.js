import { useState } from 'react';
import './news.scss';
import NewsArticle from './newsArticle';
import NewsSearch from './newsSearch';

const NewsArticlesHolder = (props) => {
    return (
        <div className="NewsArticlesHolder">
            {props.newsArticles.map((newsArticle,index) => (
                <NewsArticle key={index} newsArticle={newsArticle} />
            ))}
        </div>
    );
}

const News = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    return (
        <div className="News">
            <NewsSearch onSubmit={setNewsArticles}/>
            <NewsArticlesHolder newsArticles={newsArticles} />
        </div>
    );
}

export default News;