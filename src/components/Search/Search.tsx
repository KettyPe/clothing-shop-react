import './style.css';
import { SearchField } from './SearchField';
import { useEffect, useRef, useState } from 'react';
import { useAtom } from 'jotai';
import { searchOpenAtom } from '../../store/store';
import { products } from '../data';
import { useClickOutside } from '../../hooks/useClickOutside';
import { SearchResults } from './SearchResults';

export const Search = () => {
  const [isOpen, setIsOpen] = useAtom(searchOpenAtom);
  const [searchValue, setSearchValue] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    containerRef,
    () => {
      setIsOpen(false);
      setSearchValue('');
    },
    isOpen
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  return (
    <div className="search" ref={containerRef}>
      <div className="search__container container">
        <div className="search__body">
          <SearchField
            value={searchValue}
            onChange={setSearchValue}
            onFocus={() => setIsOpen(true)}
          />
          {isOpen && (
            <div className="search__result">
              <SearchResults searchValue={searchValue} products={products} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
