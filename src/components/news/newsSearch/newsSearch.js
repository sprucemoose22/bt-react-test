import { getArticles } from '../../../utils';
import './newsSearch.scss';

const NewsSearch = () => {
    const inputID = "SearchInput";

    const handleSubmit = (event) => {
        var searchQuery = document.getElementById(inputID).value;
        getArticles(searchQuery);

        // Prevent page from reloading on form submit
        event.preventDefault();
    }


    return (
        <div className="NewsSearch">
            <h1>News API Search</h1>

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <input
                            name="searchQuery"
                            placeholder="Search"
                            id={inputID}>
                        </input>
                    </label>
                </fieldset>
            </form>
        </div>
    );
}

export default NewsSearch;