'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchFilter from './_components/search-filter';
import SearchResult from './_components/search-result';
import { useSearch } from './_hooks/use-search';

const Search = () => {
  const searchParams = useSearchParams();
  const [controlType, setControlType] = useState(() => {
    const type = searchParams.get('type');
    if (!type) {
      return ['specialist', 'doctor'];
    }

    return [type].filter(Boolean);
  });
  const keyword = searchParams.get('q');

  const { isLoading, data: searchData } = useSearch(keyword, controlType);

  const filterHandler = (values) => {
    setControlType(values);
  };

  const filterSearchData = useMemo(() => {
    if (!searchData?.data) return [];

    return searchData.data.filter((item) =>
      controlType.includes(item.searchType),
    );
  }, [controlType, searchData]);

  return (
    <div className="container">
      <div className="flex flex-row p-4">
        <SearchFilter
          defaultControlType={controlType}
          onFilter={filterHandler}
        />

        <SearchResult
          keyword={keyword}
          isSearching={isLoading}
          data={filterSearchData}
        />
      </div>
    </div>
  );
};

export default Search;
