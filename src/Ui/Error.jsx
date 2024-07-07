import {useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data}</p>
      <p>{error.message}</p>
      <LinkButton to='-1' navigate={true}>&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
