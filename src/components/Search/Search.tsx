import "./style.css"
import { PopularSearches } from "./PopularSearches"
import { SearchField } from "./SearchField"
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { searchOpenAtom } from "../../store/store";

export const Search = () => {
     const [isOpen, setIsOpen] = useAtom(searchOpenAtom);
     const [searchValue, setSearchValue] = useState('');
     const containerRef = useRef<HTMLDivElement>(null);

     useEffect(() => {
          const handleClickOutside = (event: MouseEvent) => {
               if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                    setIsOpen(false);
               }
          };

          if (isOpen) {
               document.addEventListener('mousedown', handleClickOutside);
                document.body.style.overflow = "hidden";
          } else {
               document.body.style.overflow = "";
          }

          return () => {
               document.removeEventListener('mousedown', handleClickOutside);
               document.body.style.overflow = "";
          };
     }, [isOpen]);

     const handleFocus = () => {
          setIsOpen(true);
     };

     return (
          <div className="search">
               <div className="search__container container">
                    <div className="search__body">
                         <SearchField
                              onFocus={handleFocus}
                              value={searchValue}
                              onChange={setSearchValue}
                         />
                         {isOpen && (
                              <div className="search__result">
                                   <PopularSearches />
                              </div>
                         )}
                    </div>
               </div>
          </div>
     )
}