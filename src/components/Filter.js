// src/components/Filters.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, FormGroup, Checkbox, Typography } from '@mui/material';

const Filters = ({ categories, onFilterChange }) => {
  return (
    <div>
      <Typography variant="h6">Filters</Typography>
      <FormGroup>
        {categories.map(category => (
          <FormControl key={category.category_id} sx={{ mb: 2 }}>
            <InputLabel>{category.name}</InputLabel>
            <Select
              multiple
              value={category.selected || []}
              onChange={(e) => onFilterChange(e.target.value)}
            >
              {category.options.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  <Checkbox checked={category.selected.includes(option.id)} />
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
      </FormGroup>
    </div>
  );
};

export default Filters;
