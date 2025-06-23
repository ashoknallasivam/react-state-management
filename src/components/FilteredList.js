//src/components/SampleCode.js
import React, { useState } from "react";
import classNames from "classnames";

export default function FilteredList() {
  const [query, setQuery] = useState("");
  const names = ["Ashok", "Mamta", "Suresh", "Ravi"];

  const filtered = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        data-testid="search-input"
      />
      <ul data-testid="name-list">
        {filtered.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
