import "./style.css"
import ArrowDownIcon from "../../ui/icons/ArrowDownIcon"
import CloseIcon from "../../ui/icons/CloseIcon"
import MoreIcon from "../../ui/icons/MoreIcon"
import TelegramCircleIcon from "../../ui/icons/TelegramCircleIcon"


export const Header = () => {
     return (
          <div className="header">
               <div className="header__container container">
                    <div className="header__inner">
                         <ButtonClose />
                         <ButtonTelegram />
                         <ButtonDropdown />
                    </div>
               </div>
          </div>
     )
}

const ButtonClose = () => {
     return (
          <button className="header__button" type='button'>
               <CloseIcon />
               <span>Закрыть</span>
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