export default function QueriesCheckBoxList({setQueryString, setSortDirection}){
  const ASCorDESC = (e) => {
    if (e.target.checked) {
      setSortDirection("DESC");
    } else {
      setSortDirection("ASC");
    }
  };

  const addToQuery = (e) => {
    setQueryString(e.target.value);
  };

  return (
    <>
      <div className="filtersListContainer">
      <fieldset>
        <h5>Sort Articles</h5>
        <div className="filterItem">
          <input
            type="radio"
            name="queries"
            value="created_at"
            onClick={addToQuery}
            />
          <label htmlFor="date">Date</label>
        </div>

        <div className="filterItem">
          <input
            type="radio"
            id="comment_count"
            name="queries"
            onClick={addToQuery}
            value="comment_count"
            />
          <label htmlFor="comment_count">Number of Comments </label>
        </div>

        <div className="filterItem">
          <input
            type="radio"
            id="votes"
            name="queries"
            onClick={addToQuery}
            value="votes"
          />
          <label htmlFor="votes">Votes</label>
        </div>
        <div className="filterItem highestToLowestBtn">
        Order from highest to lowest <br/>
        <input
          type="checkbox"
          value="DESC"
          onChange={ASCorDESC}
          required
          />
        <br></br>
          </div>
      </fieldset>
          </div>
    </>
  );
};






 