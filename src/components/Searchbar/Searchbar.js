import react from "react";
import PropTypes from "prop-types";
import style from "./Searchbar.module.css";

// const Searchbar = ({ onSubmit }) => {
  const Searchbar = () => {
  return (
    <>
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            // onSubmit={onSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};

// Searchbar.PropTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;