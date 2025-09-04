interface InputProps {
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
  return (
    <>
      <input
        value={props.value || ''}
        onChange={(e) => props.onChange?.(e.target.value)}
        placeholder="Поиск..."
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        type="text"
        placeholder="Найти товары"
        className="search__input"
      />
    </>
  );
};
