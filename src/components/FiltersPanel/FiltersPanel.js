import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import DateInput from '../DateInput/DateInput';
import Select from '../Select/Select';
import { FiltersWrapper } from './StyledComponents';
import { setFilterByText, setFilterByDate } from '../../redux/actions/filtersActions';
import { setSortingType } from '../../redux/actions/sortActions';

const FiltersPanel = ({
  sortOptions,
  sortType,
  setSortingType,
  filters,
  setFilterByText,
  setFilterByDate,
}) => {
  return (
    <FiltersWrapper>
      <Input
        onChange={setFilterByText}
        placeholder="Search for todos..."
        inputText={filters.text}
      />
      <DateInput onChange={setFilterByDate} labelText="Filter by date: " />
      <Select
        optionsList={sortOptions}
        selectedOption={sortType}
        onChange={setSortingType}
        labelText="Sort by: "
      />
    </FiltersWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
    sortOptions: state.sortOptions,
    sortType: state.sort,
  };
};

const mapDispatchToProps = {
  setFilterByText,
  setFilterByDate,
  setSortingType,
};

FiltersPanel.propTypes = {
  setSortingType: PropTypes.func.isRequired,
  setFilterByDate: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({ type: PropTypes.string.isRequired, value: PropTypes.string.isRequired }),
  ).isRequired,
  setFilterByText: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
