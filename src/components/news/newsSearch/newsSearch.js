import { useReducer } from 'react';
import { getArticles } from '../../../utils';
import './newsSearch.scss';

const NewsSearch = () => {

    const handleSubmit = (event) => {
        getArticles("food");

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
                            placeholder="Search">
                        </input>
                    </label>
                </fieldset>
            </form>
        </div>
    );
}

export default NewsSearch;