import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import Select from '../Select/Select';
import { FiltersWrapper } from './StyledComponents';
import { setFilterByText } from '../../redux/actions/filtersActions';

const FiltersPanel = ({
  searchTodos,
  setFilterDate,
  sortOptions,
  sortType,
  setSortType,
  searchQuery,
  filters,
  setFilterByText,
}) => {
  return (
    <FiltersWrapper>
      <Input
        onChange={setFilterByText}
        placeholder="Search for todos..."
        inputText={filters.text}
      />
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

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  setFilterByText,
};

FiltersPanel.propTypes = {
  setSortType: PropTypes.func.isRequired,
  setFilterDate: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, value: PropTypes.string.isRequired }),
  ).isRequired,
  searchTodos: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
