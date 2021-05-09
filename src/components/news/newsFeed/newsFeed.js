import NewsFeedArticle from './newsFeedArticle';
import './newsFeed.scss';

const NewsFeed = (props) => {
    return (
        <div className="NewsFeed">
            {props.articles.map((article,index) => (
                <NewsFeedArticle key={index} article={article} />
            ))}
        </div>
    );
}

export default NewsFeed;