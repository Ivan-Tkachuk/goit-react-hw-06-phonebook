import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filterSlice';

import { Label, Input } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const changeFilter = e => {
    const { value } = e.currentTarget;
    dispatch(setStatusFilter(value));
  };

  return (
    <Label>
      Find contacts by Name{' '}
      <Input type="text" value={filter} name="filter" onChange={changeFilter} />
    </Label>
  );
};

export default Filter;
