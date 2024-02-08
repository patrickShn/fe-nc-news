import { useState } from "react";



export default function QueriesCheckBoxList({setQueryString, queryString, setSortDirection, sortDirection}){
    
    

  const handleSortByChange = (e) => {
    e.preventDefault();
    setQueryString(e.target.value);
  };

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
      <div className="queriesList">
        <h4>{queryString && `sorting articles by ${queryString}`}</h4>
        <h4>{queryString && `in ${sortDirection} order`}</h4>
      </div>

      <div className="filtersListContainer">


      <fieldset>
        <legend>Select a Query:</legend>

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
          <label htmlFor="comment_count">Comment no.</label>
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
        <div className="filterItem">

        Order from highest to lowest <div></div>    
        <input
          type="checkbox"
          value="DESC"
          onChange={ASCorDESC}
          required
          />
        <br></br>
          </div>
        <button onClick={handleSortByChange}>Apply</button>
      </fieldset>
          </div>
    </>
  );
};






 