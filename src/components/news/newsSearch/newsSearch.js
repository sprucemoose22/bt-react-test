import { useReducer } from 'react';
import { getArticles } from '../../../utils';
import './newsSearch.scss';

const NewsSearch = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        getArticles("food");
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