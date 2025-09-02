import SearchIcon from "../../ui/icons/SearchIcon"

export const SearchField = () => {
     return (
          <div className="search__inner">
               <SearchIcon className="search__icon" />
               <input className="search__input" type="text" placeholder="Найти товары" />
          </div>
     )
}