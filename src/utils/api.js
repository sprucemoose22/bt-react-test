const API_KEY = 'b020f517401c468e959b04ce2f1745c3';

const resultsToDisplay = 10;
const resultsToDisplayParameter = '&pageSize=' + resultsToDisplay.toString();

const articleCharacterLimit = 150;
const articleContentDelimiter = '...';

/**
 * Return a list of articles related to the search query
 * @param {string} searchQuery The user's search query
 * @returns Object containing a list of news articles
 */
export const getArticles = async(searchQuery, callback) => {
    const url = urlBuilder(searchQuery);

    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            limitArticleCharacterCount(data);
            console.log(data);
            return(callback(data.articles))
        })
        .catch(error => console.log(error));
}

/**
 * Creates a valid URL that will return results when fetched
 * @param {string} searchQuery The user's search query
 * @returns Encoded URL
 */
const urlBuilder = (searchQuery) => {
    return encodeURI(
        'https://newsapi.org/v2/everything?q=' +
        searchQuery.toString() +
        resultsToDisplayParameter + 
        '&sortBy=popularity&apiKey=' + 
        API_KEY
    );
}

/**
 * Limits the number of characters within each news article
 * @param {JSON} response Response received from News API
 */
const limitArticleCharacterCount = (response) => {
    const articles = response.articles;

    for(const article of articles) {
        article.content = article.content
            .substring(0, articleCharacterLimit)
            .concat(articleContentDelimiter);
    }
}
