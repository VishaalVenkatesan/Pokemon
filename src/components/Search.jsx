import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  "./search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate('/result', { state: { searchValue } });
  };

  return (
    <div className='root'>
      <form onSubmit={handleSearch} className='form'>
        <h1>Hi There!</h1>
      <h2>Enter any Pokemon of your choice</h2>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
          className="inputText"
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;