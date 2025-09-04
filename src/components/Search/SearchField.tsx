import React from "react";
import "./style.css"
import SearchIcon from "../../ui/icons/SearchIcon"

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
          </div>
     )
}