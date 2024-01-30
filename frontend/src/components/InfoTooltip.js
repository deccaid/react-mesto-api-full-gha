function InfoTooltip ({ isOpen, onClose, title, image }) {
    
    return(
        <div
        className={`popup popup_type_auth ${isOpen ? "popup_opened" : ""}`}> 
        <div className="popup__container">
        <button className="popup__exit" type="button" onClick={onClose} />
        <img className="popup__tooltip-image" src={image} alt='' />
        <h2 className="popup__tooltip-title">{title}</h2>
        </div>
        </div>
    )
}
export default InfoTooltip