import NewsArticle from '../newsArticle';
import './newsFeed.scss';

const NewsFeed = (props) => {
    return (
        <div className="NewsFeed">
            {props.newsArticles.map((newsArticle,index) => (
                <NewsArticle key={index} newsArticle={newsArticle} />
            ))}
        </div>
    );
}

export default NewsFeed;