import React from 'react';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import Select from '../Select/Select';
import { Wrapper } from '../TodoBoard/StyledComponents';

const FiltersPanel = ({searchTodos, setFilterDate, sortOptions, sortType, setSortType}) => {
  return (
    <div>
      <Input onChange={searchTodos} placeholder="Search for todos..." />
      <DateInput onChange={setFilterDate} />
      <Select optionsList={sortOptions} selectedOption={sortType} onChange={setSortType} />
    </div>
  );
};

export default FiltersPanel;
