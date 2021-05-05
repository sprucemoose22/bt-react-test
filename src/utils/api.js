const API_KEY = 'b020f517401c468e959b04ce2f1745c3';
const resultsToDisplay = 10;
const resultsToDisplayParameter = '&pageSize=' + resultsToDisplay.toString();

export const getArticles = async(searchQuery) => {
    const url = urlBuilder(searchQuery);

    return await fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
}

const urlBuilder = (searchQuery) => {
    return encodeURI(
        'https://newsapi.org/v2/everything?q=' +
        searchQuery.toString() +
        resultsToDisplayParameter + 
        '&sortBy=popularity&apiKey=' + 
        API_KEY
    );
}