import React, { useState } from 'react';

interface SearchBoxProps {
  performSearch: (text: string) => void;
}

const SearchBox: React.FunctionComponent<SearchBoxProps> = ({
  performSearch,
}: SearchBoxProps) => {
  const [description, setDescription] = useState('');
  return (
    <div className="w-full text-center">
      <input
        className="w-64 inline-block bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 appearance-none leading-normal"
        type="search"
        placeholder="Search an NBA player"
        value={description}
        onKeyDown={(ev: React.KeyboardEvent<HTMLInputElement>): void => {
          if (ev.keyCode === 13) {
            ev.preventDefault();
            performSearch(description);
          }
        }}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>): void => {
          setDescription(ev.target.value);
        }}
      />
      <button
        className="ml-4 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        type="submit"
        onClick={() => performSearch(description)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
