import React from 'react';
import ListItem from './ListItem';

const listId = [0, 1, 2, 3, 4, 5, 6, 7];

function Lists() {
  return (
    <div>
      {listId.map((item) => (
        <ListItem key={item} listId={item}></ListItem>
      ))}
    </div>
  );
}

export default Lists;
