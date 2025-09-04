import type { products } from "../data";
import { ProductCardSeacrhResult } from "../ProductCard/ProductCardSearchResults";
import { PopularSearches } from "./PopularSearches";

type SearchResultsProps = {
    searchValue: string;
    products: typeof products;
};

export const SearchResults = ({ searchValue, products }: SearchResultsProps) => {
    const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (searchValue.trim() === "") {
        return <PopularSearches />;
    }

    if (filteredProducts.length === 0) {
        return <p className="search__empty">Ничего не найдено</p>;
    }

    return (
        <div className="search__results-products">
            <div className="results-seacrh__cards">
                {filteredProducts.map((product) => (
                    <ProductCardSeacrhResult key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};
