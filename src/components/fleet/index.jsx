import React from 'react';

function Fleet({ title, items }) {
  return (
    <section>
      <h2>{title}</h2>
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}><a href={`/${title.toLowerCase()}/${item.toLowerCase()}`}>{item}</a></li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Fleet;