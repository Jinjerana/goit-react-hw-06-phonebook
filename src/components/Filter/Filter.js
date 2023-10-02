import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';
import { getFilter } from 'Redux/filterSelectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  // const changeFilter = () => dispatch(setFilter(filter.id));
  // const changeFilter = e => {
  //   dispatch(setFilter(e.target.value));

  return (
    <div>
      <div>Find contacts by name</div>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
        placeholder="search"
      />
    </div>
  );
};

export default Filter;
