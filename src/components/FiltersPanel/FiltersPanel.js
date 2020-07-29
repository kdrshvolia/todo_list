import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import Select from '../Select/Select';
import { Wrapper } from '../TodoBoard/StyledComponents';
import { FiltersWrapper } from './StyledComponents';

const FiltersPanel = ({ searchTodos, setFilterDate, sortOptions, sortType, setSortType }) => {
  return (
    <FiltersWrapper>
      <Input onChange={searchTodos} placeholder="Search for todos..." />
      <DateInput onChange={setFilterDate} labelText="Filter by date: " />
      <Select
        optionsList={sortOptions}
        selectedOption={sortType}
        onChange={setSortType}
        labelText="Sort by: "
      />
    </FiltersWrapper>
  );
};

FiltersPanel.propTypes = {
  setSortType: PropTypes.func.isRequired,
  setFilterDate: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, value: PropTypes.string.isRequired }),
  ).isRequired,
  searchTodos: PropTypes.func.isRequired,
};

export default FiltersPanel;
