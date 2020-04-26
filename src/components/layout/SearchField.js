import React from "react";

const SearchField = () => {
  let searchPlaceHolder = "";
  let submitPlaceHolder = '';
  const language = "en";

  switch (language) {
    case "en":
      searchPlaceHolder = "Search a Pokemon";
      submitPlaceHolder = "Search"
      break;
    case "es":
      searchPlaceHolder = "Buscar un Pokemon";
      submitPlaceHolder = "Buscar"
      break;
    default:
      searchPlaceHolder = "Search a Pokemon";
      submitPlaceHolder = "Search"
      break;
  }

  return (
    <form className="col-12">
      <div className="row">
        <div className="col-md-9 col-sm-12 mb-2">
          <input
            name="query"
            className="form-control"
            type="text"
            placeholder={searchPlaceHolder}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value={submitPlaceHolder}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchField;
