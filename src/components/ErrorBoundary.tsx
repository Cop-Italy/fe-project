import React, { ErrorInfo } from 'react';

// WARNING: error boundaries cannot be functional components
// @see also https://thedeployguy.com/2019-03-24-react-error-boundaries/
interface ErrorBoundaryProps {
  hasError: boolean;
  error: string;
}
export default class ErrorBoundary extends React.Component<
  unknown,
  ErrorBoundaryProps
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: '' };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryProps {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    // You can also log the error to an error reporting service
    console.log(error.message);
    console.log(info);
    // logError(error, info);
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops!</h2>
          <p>Something went wrong.</p>
          {error}
        </div>
      );
    }

    // If there is no error just render the children component.
    // eslint-disable-next-line react/destructuring-assignment
    return this.props.children;
  }
}
