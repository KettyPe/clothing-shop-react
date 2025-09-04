import './style.css';
import SearchIcon from '../../ui/icons/SearchIcon';

const PopularSearchesInfo = [
  {
    id: 1,
    title: 'футболка',
  },
  {
    id: 2,
    title: 'женская кофта',
  },
  {
    id: 3,
    title: 'сертификат',
  },
  {
    id: 4,
    title: 'куртка',
  },
  {
    id: 5,
    title: 'детская футболка',
  },
];

export const PopularSearches = () => {
  return (
    <div className="popular-searches">
      <p className="popular-searches__title">Часто ищут</p>
      <div className="popular-searches__items">
        {PopularSearchesInfo.map((item) => (
          <PopularSearchesItem key={item.id} title={item.title} />
        ))}
      </div>
    </div>
  );
};

const PopularSearchesItem = ({ title }: { title: string }) => {
  return (
    <a href="#" className="popular-searches__item">
      <SearchIcon width={10} height={10} />
      <p className="popular-searches__item-title">{title}</p>
    </a>
  );
};
