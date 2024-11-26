"use client"
import {useTranslation} from "next-i18next";
import { Modal, Button } from 'react-bootstrap';

const ModalLastUpdate = ({showModal, setShowModal}) => {
    const {t} = useTranslation('common');

    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} className="market-filter-modal" centered>
            <Modal.Header>
                <Modal.Title>{t('stockMarketFilter.modals.modalDateTitle')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{t('stockMarketFilter.modals.description')}</p>
                {t('stockMarketFilter.modals.modalDateBody')}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => setShowModal(false)}>
                    {t('stockMarketFilter.modals.close')}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalLastUpdate
