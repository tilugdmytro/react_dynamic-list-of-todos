import React from 'react';
import { FilterType } from '../../types/FilterType';

type Props = {
  query: string;
  setQuery: (value: string) => void;
  setFilterBy: (value: FilterType) => void;
};

export const TodoFilter: React.FC<Props> = ({
  query,
  setQuery,
  setFilterBy,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value as FilterType);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select data-cy="statusSelect" onChange={handleSelectChange}>
            <option value={FilterType.All}>{FilterType.All}</option>
            <option value={FilterType.Active}>{FilterType.Active}</option>
            <option value={FilterType.Completed}>{FilterType.Completed}</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          {query && (
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              aria-label="clearSearchButton"
              onClick={() => setQuery('')}
            />
          )}
        </span>
      </p>
    </form>
  );
};
