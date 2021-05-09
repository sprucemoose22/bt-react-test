import { useState } from 'react';
import './news.scss';
import NewsFeed from './newsFeed';
import NewsSearch from './newsSearch';

const News = () => {
    const [articles, setArticles] = useState([]);

    return (
        <div className="News">
            <NewsSearch onSubmit={setArticles}/>
            <NewsFeed articles={articles} />
        </div>
    );
}

export default News;