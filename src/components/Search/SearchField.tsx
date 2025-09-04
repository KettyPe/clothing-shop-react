import './style.css';
import SearchIcon from '../../ui/icons/SearchIcon';
import { Input } from '../../ui/input/Input';

interface SearchFieldProps {
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchField = (props: SearchFieldProps) => {
  return (
    <div className="search__inner">
      <SearchIcon className="search__icon" />
      <Input
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};
