import css from "styled-jsx/css";

export default css`
  .add-to-portfolio-popup-modal .modal-content .modal-header-mobile-popup,
  .the-whole-mobile-modal .modal-header-mobile-popup {
    padding: 19px 15px;
  }

  .mobile-popup-body,
  .modal-header-mobile-popup {
    position: relative;
  }

  .modal-header-mobile-popup-close-button {
    position: absolute;
    filter: invert(100%);
    right: 15px;
    top: 15px;
  }

  .the-whole-mobile-modal {
    width: 100%;
  }

  .borderTop {
    border-top: 1px solid var(--clr-border);
  }
`;
