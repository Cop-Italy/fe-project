import React from 'react';

interface SearchMessageProps {
  message: string;
}

const SearchMessage: React.FunctionComponent<SearchMessageProps> = ({
  message,
}: SearchMessageProps) => <div className="my-4 text-center">{message}</div>;

export default SearchMessage;
