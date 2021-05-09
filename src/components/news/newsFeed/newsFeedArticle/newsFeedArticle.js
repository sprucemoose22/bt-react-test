import './newsFeedArticle.scss';

const NewsFeedArticle = (props) => {
    return (
        <div className="NewsArticle">
            <h2>{props.newsArticle.title}</h2>
        </div>
    );
}

export default NewsFeedArticle;