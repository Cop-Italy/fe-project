import React from 'react';

interface PageHeaderProps {
  headline?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = ({
  headline,
}: PageHeaderProps) => (
  <header className="text-center my-4 text-2xl text-gray-700">
    {headline !== undefined ? headline : 'NBA players registry'}{' '}
    {/* I18N is out of scope here */}
  </header>
);

PageHeader.defaultProps = {
  headline: undefined,
};

export default PageHeader;
