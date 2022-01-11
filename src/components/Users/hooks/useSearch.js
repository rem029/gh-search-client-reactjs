import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useAxiosWithRedux from '../../../hooks/useAxiosWithRedux';
import config from '../../../config';

const useSearch = (defaultValue = '') => {
  const searchValue = useSelector((state) => state.query);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const { get } = useAxiosWithRedux('GET_USER_SEARCH');

  const searchValueHandleChange = (text = '') => dispatch({ type: 'QUERY_UPDATE', query: text });

  useEffect(() => {
    if (defaultValue.length > 0) dispatch({ type: 'QUERY_UPDATE', query: defaultValue });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const searchValueSubmit = () => {
      const maxPage = config.itemsPerPage;
      const urlEndPoint = `/search/users?per_page=${maxPage}&q=${searchValue}&page=${currentPage}`;

      if (searchValue.length > 0) dispatch(get({ urlEndPoint: urlEndPoint }));
    };

    const timeId = setTimeout(searchValueSubmit, 300);

    return () => clearTimeout(timeId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, currentPage]);

  const pageNext = () => setCurrentPage((currentVal) => currentVal + 1);
  const pagePrevious = () => setCurrentPage((currentVal) => (currentVal <= 1 ? 1 : currentVal - 1));

  return { searchValue, currentPage, pageNext, pagePrevious, searchValueHandleChange };
};

export default useSearch;
