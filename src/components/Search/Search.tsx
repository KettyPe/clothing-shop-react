import "./style.css"
import { PopularSearches } from "./PopularSearches"
import { SearchField } from "./SearchField"

export const Search = () => {
     return (
          <div className="search">
               <div className="search__container container">
                    <div className="search__body">
                         <SearchField/>
                         <div className="search__result">
                              <PopularSearches />
                         </div>
                    </div>
               </div>
          </div>
     )
}