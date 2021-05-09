import { useState } from 'react';
import './news.scss';
import NewsArticle from './newsArticle';
import NewsFeed from './newsFeed';
import NewsSearch from './newsSearch';

const News = () => {
    const [newsArticles, setNewsArticles] = useState([]);

    return (
        <div className="News">
            <NewsSearch onSubmit={setNewsArticles}/>
            <NewsFeed newsArticles={newsArticles} />
        </div>
    );
}

export default News;