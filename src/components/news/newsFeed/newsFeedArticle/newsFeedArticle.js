import './newsFeedArticle.scss';

const NewsFeedArticle = (props) => {
    return (
        <div className="NewsArticle">
            <h2>{props.article.title}</h2>
        </div>
    );
}

export default NewsFeedArticle;