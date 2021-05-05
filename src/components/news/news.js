import './news.scss';
import NewsArticle from './newsArticle';
import NewsSearch from './newsSearch';

const News = () => {
    return (
        <div className="News">
            <NewsSearch />
            <NewsArticle />
            <NewsArticle />
            <NewsArticle />
        </div>
    );
}

export default News;