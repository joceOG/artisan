import React, { FC, ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';



interface SearchFieldProps {
  onSearch: (query: string) => void;
}

const SearchField: FC<SearchFieldProps> = ({ onSearch }) => {
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };


  return (
    <div>
      <TextField
        placeholder="Rechercher un service"
        variant="outlined"
        fullWidth
        onChange={handleSearch}
        InputProps={{
          style: { color: "black" , background:"white" , height:'40px' , padding:'5px' },
          endAdornment: (
            <IconButton 
            onClick={() => onSearch('')}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchField;