import React from 'react';
import { useGetDummyQuery } from '../api';

const ListItem = ({ listId }) => {
  const { data, error, isLoading } = useGetDummyQuery(listId);

  if (error) {
    return <div>에러 😭 </div>;
  }
  if (isLoading) {
    return <div>Loading!</div>;
  }

  return (
    <div>
      {data ? (
        <>
          <h3>
            {data[listId].id} : {data[listId].title}
          </h3>
          <p>{data[listId].body}</p>
          <p>created date: {new Date().getTime()}</p>
        </>
      ) : null}
    </div>
  );
};

export default ListItem;
