import { useSearchParams } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

import './index.scss';
import { useEffect } from 'react';

const UsersSearch = ({ searchValue = '', searchValueHandleChange = (_text) => {} }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchParamValue = searchParams.get('search') || '';
    if (searchParamValue.length > 0) searchValueHandleChange(searchParamValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
