import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import styles from './UniversalModalStyles';

const UniversalModal = ({title, description, handle, show, closeButton, footer, extraClassName, bodyExtraClassName, footerExtraClassName}) => {
    const { t } = useTranslation('common');
    return (
        <>
        <Modal show={show} onHide={handle} className={`universal-modal-component ${extraClassName ? extraClassName : ""}`} centered>
            {title ? <Modal.Header>
                <Modal.Title style={{display: 'flex', justifyContent: 'space-between'}}>
                    {title}
                    <div onClick={handle} className='aiscore-header-close-btn'>
                        <img src="https://cdn.danelfin.com/assets/next/images/icons/closeXBlack.svg" alt="close icon" />
                    </div>
                </Modal.Title>
            </Modal.Header> : <></>}
            {description ? <Modal.Body>
                {description}
            </Modal.Body> : <></>}
            {closeButton || footer ? 
            <Modal.Footer className={footerExtraClassName ? footerExtraClassName : ""}>
                {footer}
                {closeButton ? 
                <Button variant="primary" onClick={handle}>
                    Close
                </Button> : <></>}
            </Modal.Footer> : <></>}
        </Modal>
        <style jsx>{styles}</style>
        </>
    )
}

export default UniversalModal
