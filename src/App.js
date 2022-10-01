import { useState } from 'react';
import './App.css';
import { countries } from './countries';

function App() {
  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className='app'>
      <input
        className='search'
        type="text"
        placeholder='Search...'
        onChange={handleChange}
      />
      <ul className='list'>
        {countries.filter(c => c.country.toLowerCase().includes(query))
          .map(c => (
            <li key={c.id}>{c.flag} {c.country}</li>
          ))}
      </ul>
    </div>

  );
}

export default App;
