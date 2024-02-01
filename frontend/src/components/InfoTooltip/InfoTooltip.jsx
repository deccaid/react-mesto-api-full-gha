export default function InfoTooltip({ isOpen, isClose, logo, name }) {
    return (
      <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__container">
          <img className="popup__logo" src={logo} alt="запрос!" />
          <p className="popup__title popup__title_margin">{name}!</p>
          <button type="button" className="popup__close-button" onClick={isClose}></button>
        </div>
      </div>
    )
  }
