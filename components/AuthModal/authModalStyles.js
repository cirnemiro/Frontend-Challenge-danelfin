import css from "styled-jsx/css";

export const authModalStyles = css`
  .auth-modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 999999;
    overflow-y: scroll;
    max-width: 100vw;
  }

  .auth-modal-content {
    top: 0;
    height: 100%;
    width: 100vw;
    max-width: 410px;
    background-color: var(--clr-light);
  }

  .auth-modal-body {
    height: 100%;
    width: 100%;
    max-width: 100vw;
    position: relative;
  }

  .auth-modal-close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  body.modal-is-showing-body {
    overflow: hidden;
    padding-right: 17px;
  }

  body.modal-is-showing-body-safari {
    overflow: hidden;
    padding-right: 0px;
  }

  @media (min-width: 770px) {
    .auth-modal {
      padding: 64px 20px;
      overflow-x: hidden;
    }

    .auth-modal-body,
    .auth-modal-content {
      border-radius: 6px;
      width: 410px;
      height: auto;
    }

    .is-a-buy .auth-modal-body,
    .is-a-buy .auth-modal-content {
      width: 568px;
      max-width: 93vw;
    }
  }

`;
