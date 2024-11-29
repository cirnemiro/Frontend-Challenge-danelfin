import { useTranslation } from 'next-i18next';
import AuthModal from '../AuthModal/AuthModal';
import styles from './MobilePopUpComponentStyles';
import portfolioStyles from '../Portfolio/PortfolioStyles';

const MobilePopUpComponent = ({ header, body, extraBodyClass, deleteButton, show, filterOrSave, handleSave, 
    close, resetFilter, noButtons, classNameProvided, bottomLlink, deletePortfolio, customButton, closeButton, 
    authModalclassNameProvided, customSaveButton }) => {
    
    const { t } = useTranslation('common');

    const modalBody = <div className={"the-whole-mobile-modal" + ` ${classNameProvided || ""}`}>
                    {header ? <div className="modal-header-mobile-popup">
                                {header}
                                {closeButton ? 
                                <div className="modal-header-mobile-popup-close-button"  onClick={(e) => close(e)}>
                                    <img src={process.env.NEXT_PUBLIC_CDN_URL + '/images/icons/closeX.svg'} alt="close x"/>
                                </div> : null}
                            </div> 
                    : ""}
                    <div className={`d-flex flex-column mobile-popup-body ${extraBodyClass || "" }`}>
                        {body}
                        <div className={noButtons ? "d-none" : "d-flex flex-column justify-content-center save-popup-buttons-mobile"}>
                            <span className="d-flex justify-content-center">
                                <button onClick={(e) => [close(e), resetFilter ? resetFilter(e) : null]}>
                                {t("popUpMobile.cancel")}
                                </button>
                                {customSaveButton ? customSaveButton : <button type="submit" className="save-btn-new-portfolio" onClick={(e) => [close(e), handleSave ? handleSave(e) : null, deletePortfolio ? deletePortfolio(e) : null ]} >
                                {t(`${filterOrSave ? 'popUpMobile.' + filterOrSave : 'popUpMobile.save'}`)}
                                </button>}
                            </span>
                            {deleteButton ? <div>{deleteButton}</div> : null}
                        </div>
                        {customButton ? customButton : null}
                        {bottomLlink ? 
                        <div>
                            {bottomLlink}
                        </div> 
                        : ""}
                    </div>
                    <style jsx>{styles}</style>    
                    <style jsx>{portfolioStyles}</style>    
                </div>

    return (
        <>
            <AuthModal show={show} body={modalBody} classNameProvided={authModalclassNameProvided} />
        </>
    )
}

export default MobilePopUpComponent
