import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found π­</h2>
      <h3>νμ΄μ§λ₯Ό μ°Ύμ μ μμ΅λλ€</h3>
      <p>μμ²­ν νμ΄μ§λ₯Ό μ°Ύμ μ μμ΅λλ€. μ¬μ΄νΈ κ΄λ¦¬μμκ² λ¬Έμν΄ μ£ΌμΈμ</p>
      <p>
        <Link to="/">νμΌλ‘ μ΄λ</Link>
      </p>
    </div>
  );
}
