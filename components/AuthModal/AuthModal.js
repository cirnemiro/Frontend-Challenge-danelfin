import {useEffect, useRef} from 'react';
import { authModalStyles } from './authModalStyles';
import styles from './authModalStyles.module.css';

const AuthModal = ({show, body, classNameProvided, closeModal, closeButton}) => {
    const wrapperRef = useRef(null);
    useEffect(() => {
        if(show) {
            if (navigator.vendor.includes('Apple') && window.innerWidth > 770) {
                document.body.style.paddingRight = 0;
              } else {
                document.body.style.paddingRight = 17;
              }
            document.body.className = 'modal-is-showing-body';
            return () => { document.body.className = ''; }
        } else {
            return () => { 
                document.body.style.paddingRight = 0;
                document.body.className.replace('modal-is-showing-body', ''); }
        }
      });


    useEffect(() => {
        if(closeModal) {
            document.addEventListener('mousedown', handleClickOutside, {passive: true});
            window.addEventListener('scroll', handleClickOutside, {passive: true});
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleClickOutside = e => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
            closeModal();
        }
    };

    return (
        <div className={styles.authModal}>
            <div className={`auth-modal ${classNameProvided}`}>
                <div className={`auth-modal-content`} ref={wrapperRef}>
                    <div className="auth-modal-body">
                    {closeButton && <img onClick={closeModal} className="auth-modal-close" src={process.env.NEXT_PUBLIC_CDN_URL + "/images/icons/close X.svg"} alt="close X" />}
                    {body}
                    </div>
                </div>
            </div>
            
            <style jsx>{authModalStyles}</style>
            <style jsx>{`
            .auth-modal {
                visibility: ${show ? "visible" : "hidden"};
            }
            `}</style>
        </div>
    )
}

export default AuthModal
