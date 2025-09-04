import "./style.css"
import ArrowDownIcon from "../../ui/icons/ArrowDownIcon"
import CloseIcon from "../../ui/icons/CloseIcon"
import MoreIcon from "../../ui/icons/MoreIcon"
import TelegramCircleIcon from "../../ui/icons/TelegramCircleIcon"
import ArrowLeftIcon from "../../ui/icons/ArrowLeftIcon"

import { useAtom } from "jotai";
import { searchOpenAtom } from "../../store/store";

export const Header = () => {
     const [isSearchOpen, setSearchOpen] = useAtom(searchOpenAtom);

     return (
          <div className="header">
               <div className="header__container container">
                    <div className="header__inner">
                         {isSearchOpen ? (
                              <ButtonClose onClick={() => setSearchOpen(false)} icon={<ArrowLeftIcon />} text="Назад" />
                         ) : (
                              <ButtonClose icon={<CloseIcon />} text="Закрыть" />
                         )}
                         <ButtonTelegram />
                         <ButtonDropdown />
                    </div>
               </div>
          </div>
     )
}

const ButtonClose = ({
     icon,
     text,
     onClick
}: {
     icon: React.ReactNode;
     text: string,
     onClick?: () => void
}) => {
     return (
          <button onClick={onClick} className="header__button" type='button'>
               {icon}
               <span>{text}</span>
          </button>
     )
}

const ButtonTelegram = () => {
     return (
          <a href="#" className='header__tg'>
               <TelegramCircleIcon />
               <span>наш tg-канал</span>
          </a>
     )
}

const ButtonDropdown = () => {
     return (
          <button className="header__dropdown">
               <ArrowDownIcon />
               <MoreIcon />
          </button>
     )
}