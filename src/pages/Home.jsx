import React from 'react';
import Lists from '../components/Lists';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>비공개 목록</p>
      <p>공유한 장르 목록</p>
      <hr />
      <Lists></Lists>
    </div>
  );
}

export default Home;
