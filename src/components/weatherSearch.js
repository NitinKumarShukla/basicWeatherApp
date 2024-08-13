import React, { useState } from 'react';

function WeatherSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="grid grid-flow-col items-center absolute mx-auto top-4 right-1 sm:right-4 gap-1 p-4">
      <input
        type="text"
        className="bg-[#00000018] text-white placeholder:text-white p-2 text-base border rounded-s-lg border-[#00000030] active:border-rose-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter major city name"
      />
      <button className='p-2 text-base bg-rose-500 text-white border border-[#00000030] rounded-e-lg hover:bg-rose-600' onClick={handleSearch}>Search</button>
    </div>
  );
}

export default WeatherSearch;
