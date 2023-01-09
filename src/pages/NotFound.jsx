import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found 😭</h2>
      <h3>페이지를 찾을 수 없습니다</h3>
      <p>요청한 페이지를 찾을 수 없습니다. 사이트 관리자에게 문의해 주세요</p>
      <p>
        <Link to="/">홈으로 이동</Link>
      </p>
    </div>
  );
}
