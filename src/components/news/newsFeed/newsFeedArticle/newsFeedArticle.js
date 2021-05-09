import './newsFeedArticle.scss';

const NewsFeedArticle = (props) => {
    const article = props.article;

    return (
        <div className="NewsFeedArticle">
            <a href={article.url} target='_blank'>

                <div className="Title">
                    <h2>{article.title}</h2>
                </div>

                <div className="Author">{article.source.name}</div>

                <div className="Content">
                    <span>{article.content}</span>
                </div>

            </a>
        </div>
    );
}

export default NewsFeedArticle;