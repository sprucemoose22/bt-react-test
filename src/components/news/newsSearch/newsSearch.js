import './newsSearch.scss';

const NewsSearch = () => {
    return (
        <div className="NewsSearch">
            <h1>News API Search</h1>

            <form>
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