import './newsFeedArticle.scss';

const NewsFeedArticle = (props) => {
    const article = props.article;

    return (
        <div className="NewsFeedArticle">
            <a href={article.url} target='_blank'>
                <h2>{article.title}</h2>
                <h3>{article.source.name}</h3>
                <h4>{article.content}</h4>
            </a>
        </div>
    );
}

export default NewsFeedArticle;