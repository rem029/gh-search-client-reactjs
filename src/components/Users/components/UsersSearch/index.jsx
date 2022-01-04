import { useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import useSearch from '../../hooks/useSearch.js';
import './index.scss';

const UsersSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchValue, searchValueHandleChange } = useSearch(searchParams.get('search') || '');

  const onInputChange = (e) => {
    e.preventDefault();
    searchValueHandleChange(e.target.value);
    setSearchParams({ search: e.target.value });
  };
  return (
    <div className="user__search__container">
      <input
        type="text"
        className="user__search__input"
        placeholder="Search user here..."
        value={searchValue}
        onChange={onInputChange}
      />
      <span className="user__search__icon__container">
        <AiOutlineSearch className="user__search__icon" />
      </span>
    </div>
  );
};

export default UsersSearch;
