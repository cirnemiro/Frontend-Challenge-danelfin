import css from "styled-jsx/css";

export const globalStyles = css.global`
  /* GENERAL STYLES **************************************************/

  @font-face {
    font-family: "Roboto Regular";
    src: url("https://cdn1.danelfin.com/fonts/Roboto-Regular.ttf");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Medium";
    src: url("https://cdn1.danelfin.com/fonts/Roboto-Medium.ttf");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Bold";
    src: url("https://cdn1.danelfin.com/fonts/Roboto-Bold.ttf");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Black";
    src: url("https://cdn1.danelfin.com/fonts/Roboto-Black.ttf");
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto Italic";
    src: url("https://cdn1.danelfin.com/fonts/Roboto-Italic.ttf");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik Regular";
    src: url("https://cdn1.danelfin.com/fonts/Graphik-Regular.woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik Medium";
    src: url("https://cdn1.danelfin.com/fonts/Graphik-Medium.woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik Semibold";
    src: url("https://cdn1.danelfin.com/fonts/Graphik-Semibold.woff2");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Graphik Bold";
    src: url("https://cdn1.danelfin.com/fonts/Graphik-Bold.woff2");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  :root {
    --ff-primary: "Roboto Regular", sans-serif;
    --ff-medium: "Roboto Medium", sans-serif;
    --ff-bold: "Roboto Bold", sans-serif;
    --ff-black: "Roboto Black", sans-serif;
    --ff-italic: "Roboto Italic", sans-serif;
    --ff-graphic: "Graphik Regular", sans-serif;
    --ff-graphikMedium: "Graphik Medium", sans-serif;
    --ff-graphicSemibold: "Graphik Semibold", sans-serif;
    --ff-graphicBold: "Graphik Bold", sans-serif;

    --fw-reg: 300;
    --fw-med: 500;
    --fw-semiBold: 600;
    --fw-bold: 700;

    --clr-light: white;
    --clr-limitationModal: #F5F5F5;
    --clr-limitationModalMobile: #F9F9F9;
    --clr-dark: #233253;
    --clr-sentiment: #83b660;
    --clr-technical: #f27116;
    --clr-orange: #fb8c09;
    --clr-skyBlue: #F2FAFF;
    --clr-fundamental: #ec4821;
    --clr-accent: #0282cc;
    --clr-btn: #00c3ff;
    --clr-links: #1156cc;
    --clr-aiScoreColumn: #F0FBFF;
    --clr-newTicker: #F3F8FF;
    --clr-aiScoreColumnLines: #d5ebff;
    --clr-significantChange: #ecf4fe;
    --clr-chosenItems: #eef4ff;
    --clr-green: #3fb55d;
    --clr-border: #dfdfdf;
    --clr-background: #f5f5f5;
    --clr-backgroundBtn: #DCE1E2;
    --clr-btkBackground: #ececec;
    --clr-deactivated: #f9f9f9;
    --clr-darkgrey: #838d91;
    --clr-newDarkgrey: #5a6166;
    --clr-tableSpanHover: #4F565B;
    --clr-tableBorder: #7A7D80;
    --clr-tableBorder2: #7B7D80;
    --clr-txtgrey: #9c9c9c;
    --clr-txtgreyBtn: #838E91;
    --clr-txtDeactivated: #727272;
    --clr-modalBackground: rgba(0, 0, 0, 0.5);
    --clr-lowgrey: #ebebeb;
    --clr-10: #5eb574;
    --clr-9: #86c87d;
    --clr-8: #a0c778;
    --clr-7: #c0d17c;
    --clr-6: #eee683;
    --clr-5: #fddc82;
    --clr-4: #fcbe7b;
    --clr-3: #faa276;
    --clr-2: #f98670;
    --clr-1: #ec6364;
    --clr-red: #f44335;
    --clr-txt: #272727;

    --fs-huge: 28px;
    --fs-h1: 22px;
    --fs-big: 20px;
    --fs-h2: 16px;
    --fs-med-bigger: 15px;
    --fs-med: 14px;
    --fs-body: 14px;
    --fs-small: 13px;
    --fs-tooltip: 12px;
    --lh-tooltip: 14px;
    
  --brand-primary: #29b5a8;
  --brand-secondary: #ff8300;
  --gray: #6b7381;
  --gray-light: #7f8794; /* equivalent to lighten(@gray, 15%) */
  --gray-lighter: #96a0b2; /* equivalent to lighten(@gray, 30%) */

  /* Button Colors */
  --btn-default-color: var(--gray);
  --btn-default-bg: var(--gray-lighter);

  /* Toggle Sizes */
  --toggle-default-size: 1.5rem;
  --toggle-default-label-width: 4rem;
  --toggle-default-font-size: 0.75rem;
  }

  html {
    scroll-behavior: smooth;
    font-size: 15px;
    max-width: 100vw !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  body {
    background: var(--clr-background) !important;
    margin: auto;
    font-family: var(--ff-primary) !important;
    font-size: var(--fs-body);
    line-height: 1.5;
    min-height: 100%;
    color: var(--clr-txt) !important;
    max-width: 100vw !important;
    position: relative;
  }

  .App {
    position: relative;
    min-height: 100%;
  }

  .page-container {
    max-width: 100vw;
    overflow: hidden;
    margin: 0 !important;
    padding: 0 !important;
  }

  .layout {
    /* this is for the footer to stay at the bottom */
    min-height: 92vh;
    position: relative;
  }

  .layout.layout-no-navbar {
    padding-top: 0;
  }

  .layout.layout-no-footer {
    padding-bottom: 0;
  }

  h1 {
    font-size: var(--fs-h1);
  }
  h2 {
    font-size: var(--fs-h2);
  }

  .generic-page-title {
    font-family: var(--ff-graphicBold);
    font-size: 22px;
    line-height: 30px;
  }

  .visibility-hidden {
    visibility: hidden;
  }

  .font-bold {
    font-family: var(--ff-bold);
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  a:not(footer a, .advanced-chart-widget-button, .add-to-portfolio-button
      *, .navbar-links-styling a, .nav-tabs
      a, .no-underline-stock-chart, .alert-portfolio a) {
    color: var(--clr-links);
  }

  .flag-border {
    border-radius: 3px;
    object-fit: cover;
  }

  .chart-patterns-dropdown{
    height:27px;
    width:78px;
  }

  .dropdown-component-selected-item-text .chart-patterns-dropdown{
    height:21.45px;
    width:64.35px;
  }

  .trade-ideas-be-dropdown{
    margin-right:6px;
  }

  /* GENERIC BUTTONS */

  .blue-button {
    background-color: var(--clr-btn) !important;
    color: var(--clr-dark) !important;
  }

  .generic-blue-button {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: none;
    background-color: var(--clr-accent);
    color: var(--clr-light);
    font-size: 16px;
    font-family: var(--ff-medium);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .generic-outlined-button {
    width: 100%;
    height: 40px;
    border-radius: 6px;
    border: 1px solid var(--clr-txtgrey);
    color: var(--clr-txt);
    font-size: 16px;
    font-family: var(--ff-medium);
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .button-no-focus:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  /* / GENERIC BUTTONS */

  .d-none {
    display: none;
  }

  .d-flex-all-center{
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .d-flex-ai-c{
    display:flex;
    align-items:center;
  }

  .d-flex-ai-base{
    display:flex;
    align-items:baseline;
  }

  .d-flex-jc-sb{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .d-flex {
    display: flex;
  }

  .d-flex-fd-c{
    display:flex;
    flex-direction:column;
  }

  .visibility-hidden {
    visibility: hidden;
  }

  .align-center {
    align-items: center;
  }

  .justify-center {
    justify-content: center;
  }

  .flex-column {
    flex-direction: column;
  }

  .blur-effect {
    filter: blur(6px);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }


  /* styling of inputs */

  body input:focus-visible,
  body a:focus-visible {
    outline: none;
  }

  body input:focus-visible.input-red,
  body input.input-red {
    outline: none;
    border: 1px solid var(--clr-red) !important;
  }

  input.generic-input {
    outline: none;
    background-color: var(--clr-background);
    border: 1px solid var(--clr-txtgrey);
    border-radius: 6px;
  }

  input.generic-input:focus-visible {
    outline: none;
    background-color: var(--clr-aiScoreColumn);
    border: 1px solid var(--clr-accent);
  }

  .input-no-focus:focus {
    outline: none !important;
    box-shadow: none !important;
  }

  /* styling of inputs */

  .negative {
    color: #e10d0d;
  }

  .background-negative {
    background-color: #e10d0d !important;
  }

  .border-negative {
    border: 1px solid #e10d0d !important;
  }

  .positive {
    color: var(--clr-green);
  }

  .background-positive {
    background-color: var(--clr-green);
  }

  .icon-info {
    width: 13px;
    height: 13px;
  }

  .content-wrapper {
    overflow: initial;
  }

  .section-content-wrapper {
    margin: auto;
    width: 100%;
  }

  main.section-content-wrapper {
    min-height: calc(100vh - 65px - 445px);
  }
 
  .page-404{
    background-color: #fff !important;
  }
  
  .sorting,
  .sorting_asc,
  .sorting_desc {
    background: none !important;
  }

  .datatable-arrow-icon-cell img {
    margin-right: 5px;
  }

  table {
    border-spacing: 0px !important;
  }

  .info-icon-blue-13px {
    width: 13px;
    height: 13px;
    cursor: pointer;
  }

  .info-icon-blue-12px{
    width: 12px;
    height: 12px;
    cursor: pointer;
  }


  #nprogress .bar {
    background: #A0CCF9 !important; 
    height:4px !important;
  }

  .tootltipGen {
    font-family: var(--ff-bold);
    font-size: var(--fs-body);
  }

  ._loading_overlay_overlay .css-df17o1 {
    top: 50vh !important;
  }

  .generic-outline-btn {
    border: 1px solid var(--clr-txtgrey);
    font-family: var(--ff-medium);
    border-radius: 6px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .disappear-more-than-770px,
  .disappear-more-than-770px.d-flex {
    display: none !important;
  }

  .disappear-more-than-767px,
  .disappear-more-than-767px.d-flex {
    display: none !important;
  }

  /* mobile bottom buttons pop up*/
  .btns-mobile-popup {
    display: flex;
    justify-content: space-between;
  }

  .cancel-btn-mobile-popup,
  .ok-btn-mobile-popup {
    width: 166px;
    height: 42px;
    max-width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    font-family: var(--ff-medium);
    border-radius: 8px;
  }

  .cancel-btn-mobile-popup {
    border: 1px solid var(--clr-txt);
  }

  .ok-btn-mobile-popup {
    color: var(--clr-light);
    background-color: var(--clr-accent);
  }
  /* / mobile bottom buttons pop up*/

  /* tooltips */

  /* top tooltip */

 .tooltipCustom {
    position: relative;
  }
  
  @media (max-width: 768px) { 
  .tooltipCustom--sm-absolute {
    position: absolute;
  }
}

  .tooltipCustom--new .tooltiptextCustom,
  .tooltipCustom .tooltiptextCustom,
  .tooltipCustom .tooltiptextCustomTableHeader {
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: #272727;
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 10 !important;
    bottom: 114%;
    left: 50%;
    margin-left: -70px;
    font-family: var(--ff-primary);
    white-space: normal !important;
    text-transform: none;
    font-size: var(--fs-tooltip) !important;
    line-height: var(--lh-tooltip) !important;
  }
  
    .tooltipCustom--new .tooltiptextCustom--new {
        bottom: 143%;
        margin-left: -63px; 
    }

  .tooltipCustom .tooltiptextCustom::after,
  .tooltipCustom .tooltiptextCustomTableHeader::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #272727 transparent transparent transparent;
  }
  
  .tooltipCustom--new .tooltiptextCustom::after{
    content: "";
    position: absolute;
        top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #272727 transparent transparent transparent;
  }
  
  .tooltipRankTI::after{
    left:22%;
  }

  .tooltipCustom--new:hover .tooltiptextCustom,
  .tooltipCustom:hover .tooltiptextCustom,
  .tooltipCustom:hover .tooltiptextCustomTableHeader {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s linear;
    pointer-events: none;
  }


  .tooltipCustom .tooltiptextCustomTableHeader {
    bottom: 50px;
    text-transform: none;
  }

  .tooltipCustom .tooltiptextCustomProbabilityAdvantage{
    width:450px;
    left: -9%;
  }

  /* / tooltips */

  /* alpha dropdown */

  .stock-list-header-appears-desktop{
    display: flex;
  }

  .stock-list-header-appears-mobile{
    display:none;
  }

  @media (max-width: 1100px){
    .stock-list-header-appears-mobile {
      display: flex;
    }

    .stock-list-header-appears-desktop{
      display:none;
    }
  }


  /* zendesk button */


  @media (max-width: 1024px) {
    #launcher {
      margin-bottom: 75px !important;
    }
  }
  @media (max-width: 770px) {
    #launcher {
      z-index: 999 !important;
    }

    #nprogress .bar {
      background: #A0CCF9 !important; 
      height:2px !important;
    }
  }

  /* / zendesk button */

  .page-content.page-content-full-screen {
    padding-bottom: 0;
  }

  /* ANIMATIONS */
  .bottom-to-top-animation {
    animation: slideUp 2.5s ease forwards;
  }

  @keyframes slideUp {
    0% { transform: translateY(100% + 10px); }
    100% { transform: translateY(0); }
  }

  @keyframes slideDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(100% + 10px); }
  }

  .bottom-to-top-animation.hideMe {
    animation: slideDown 2.5s ease forwards;
  }

  .hideMe {
    animation: slideDown 3s ease forwards;
  }
  /* / ANIMATIONS */

  @media (min-width: 770px) and (max-width: 1200px) {
    .page-content.page-content-full-screen {
      padding-bottom: 0;
      padding-top: 0;
    }

    .section-content-wrapper.page-content-full-screen {
      max-width: 100vw;
    }
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    .page-content {
      padding-top: 60px;
      padding-bottom: 430px;
    }
  }

  @media (min-width: 770px) and (max-width: 1024px) {
    .page-content {
      padding-top: 60px;
      padding-bottom: 878px;
    }
  }
  @media (max-width: 770px) {
    .generic-page-title {
      font-size: 18px;
      line-height: 28px;
    }

    .column-disappears-mobile {
      display: none !important;
    }

    .disappears-less-than-770px {
      display: none !important;
    }

    .disappear-more-than-770px {
      display: inline !important;
    }

    .page-content.page-content-full-screen {
      padding-bottom: 0;
      padding-top: 0;
    }

    main.section-content-wrapper {
      min-height: calc(100vh - 65px - 66px);
    }

    .section-content-wrapper.page-content-full-screen {
      max-width: 100vw;
    }

    .tooltipCustom .tooltiptextCustom {
      font-size: 13px;
      text-transform: none;
    }
       /* tooltips */
 

    .tooltipCustom:hover .tooltiptextCustom,
    .tooltipCustom:hover .tooltiptextCustomTableHeader {
      display: none;
    }
       
    .tooltipCustom:hover .tooltiptextCustom--new {
        display: block; 
    }
      
    .tooltipCustom .tooltiptextCustomr--sm-left::after {
    content: "";
    position: absolute;
    top: 12px;
    left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #272727 transparent transparent;
  }


  }

  @media (max-width: 767px) {
    .disappears-less-than-767px,
    .disappears-less-than-767px.d-flex {
      display: none !important;
    }

    .disappear-more-than-767px,
    .disappear-more-than-767px.d-flex {
      display: inline-block !important;
    }
  }

  @media (max-width: 375px) {
    .cancel-btn-mobile-popup,
    .ok-btn-mobile-popup {
      width: 47vw;
    }
  }

  
  .dropdown-modal-disabled{
    position: fixed;
    transform: translateY(100%);
  }

  /* END OF GENERAL STYLES ***********************************/
`;

export const modalsStyles = css.global`
  .universal-modal-component {
    font-size: 14px;
    padding-left:0 !important;
  }

  .aiscore-inner-modal{
    height:100%;
  }

  .modal-content:not(.add-to-portfolio-popup-modal
      .modal-content, .the-whole-mobile-modal
      .modal-content, .share-button-mobile-modal .modal-content, .login-form) {
    border-radius: 8px;
    max-width: 568px;
    margin: 0 auto;
  }

  body.modal-open {
    overflow: hidden;
    padding-right: 17px !important;
    position: relative;
  }

  @supports (-webkit-touch-callout: none) {
    body.modal-open {
      padding-right: 0px !important;
    }
  }

  body {
    padding-right: 0px !important;
  }

  .modal,
  .modal-backdrop,
  .gen-modal-container 
   {
    z-index: 999999;
  }

  .modal-dialog {
    max-width: 570px !important;
  }

  .modal-header:not(.add-to-portfolio-popup-modal
      .modal-content
      .modal-header, .the-whole-mobile-modal
      .modal-content
      .modal-header, .share-button-mobile-modal .modal-content .modal-header) {
    font-family: var(--ff-bold);
    width: 100%;
    padding: 0;
    border-bottom: none;
    display: flex;
    justify-content: center;
  }
  
  .modal-title:not(.share-button-mobile-modal
    .modal-header
    .modal-title, .add-to-portfolio-modal-title) {
        font-size:20px;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 19px 20px 17px;
    border-bottom: 1px solid var(--clr-border);
  }

  .modal-body:not(.share-button-mobile-modal
      .modal-body, .the-whole-mobile-modal .modal-content .modal-body) {
        padding: 16px 20px;
        padding-bottom:0;
        text-align: left;
        display: flex;
        align-items: center;
      }
  
  .modal-body{
    overflow-y:auto;
  }    

  .modal-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 15px;
    border-top: none;
  }

  .modal-footer button {
    background-color: var(--clr-accent);
    width: 88px;
    height: 42px;
    border-radius: 8px;
  }

  @media (max-width: 770px) {
    .modal-content {
      width: 100vw;
    }
    .modal-header:not(.add-to-portfolio-popup-modal
        .modal-content
        .modal-header, .the-whole-mobile-modal
        .modal-content
        .modal-header, .share-button-mobile-modal
        .modal-content
        .modal-header) {
      font-size: 18px;
      text-align: center;
      width: 100%;
      padding: 0;
    }

    .modal-header
      .modal-title:not(.share-button-mobile-modal .modal-header) {
        font-size: 18px;
        text-align: center;
        width: 100%;
        display: flex;
        justify-content: center;
        padding:20px 16px 15px;
      }

    .modal-body:not(.share-button-mobile-modal
        .modal-body, .the-whole-mobile-modal .modal-body) {
      padding: 10px;
      font-size: 11px;
    }

    .modal-dialog {
      max-width: 100% !important;
    }

    body.modal-open {
      padding-right: 0px !important;
    }
  }
`;

export const mobilePopUp = css.global`
  .add-to-portfolio-popup-modal {
    height: 100vh;
  }

  .add-to-portfolio-popup-modal .modal-dialog {
    margin: 0;
  }

  .the-whole-mobile-modal .modal-dialog {
    margin: 0;
    width: 100vw !important;
  }

  .popup-mobile-form {
    width: 100vw !important;
  }

  .add-to-portfolio-popup-modal .modal-content {
    height: 100vh;
    border-radius: 0px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .the-whole-mobile-modal .modal-body {
    padding-left: 0;
    padding-right: 0;
  }

  .the-whole-mobile-modal .modal-content {
    min-height: 100vh;
    height: 100%;
    border: 0px;
  }

  .add-to-portfolio-popup-modal .modal-content .modal-header,
  .the-whole-mobile-modal .modal-content .modal-header {
    background-color: var(--clr-accent);
    color: var(--clr-light);
    font-size: 18px;
    line-height: 22px;
    font-family: var(--ff-medium) !important;
    max-width: 100vw;
    border-radius: 0px;
  }

  .mobile-popup-body {
    position: relative;
  }

  .the-whole-mobile-modal {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: white;
  }

  .the-whole-mobile-modal.modal {
    padding-left: 0 !important;
  }

  .add-to-portfolio-popup-modal .modal-content .modal-header .close,
  .the-whole-mobile-modal .modal-content .modal-header .close {
    color: var(--clr-light);
    text-shadow: none;
    opacity: 1;
    font-weight: 100;
    font-size: 1.7rem;
  }

  .the-whole-mobile-modal input[type="text"],
  .the-whole-mobile-modal input[type="password"] {
    border: 1px solid var(--clr-txtgrey) !important;
    background-color: var(--clr-background) !important;
    width: 100vw;
    max-width: 95vw;
    height: 45px !important;
    border-radius: 6px !important;
  }

  .the-whole-mobile-modal input:focus-visible {
    background-color: var(--clr-aiScoreColumn) !important;
    border: 1px solid var(--clr-accent) !important;
  }

  .save-popup-buttons-mobile {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0.1rem;
    left: 0.25rem;
    right: 0.25rem;
    z-index: 4;
    background-color: var(--clr-light);
    max-width: 100vw;
  }

  .save-popup-buttons-mobile button {
    color: var(--clr-txt);
    font-size: var(--fs-body) !important;
    width: 170px;
    height: 40px;
    max-width: 50vw;
    border-radius: 8px;
    background-color: var(--clr-light);
  }

  .save-popup-buttons-mobile button:first-child {
    background-color: var(--clr-light);
    border: 1px solid var(--clr-darkgrey);
  }

  .save-popup-buttons-mobile button + button {
    background-color: var(--clr-accent);
    color: var(--clr-light);
    margin-left: 12px;
  }

  .save-popup-buttons-mobile {
    display: flex;
    justify-content: space-between;
    color: var(--clr-txt) !important;
    padding: 1rem 0;
  }

  .add-to-portfolio-popup-modal .modal-footer {
    padding: 1rem 0;
    border-top: none;
  }

  .add-to-portfolio-popup-modal .save-portfolio-button-mobile.btn:hover {
    color: var(--clr-light);
  }

  .save-portfolio-button-mobile {
    z-index: 9999;
  }

  .save-btn-new-portfolio {
    border: none;
  }

  @media (min-width: 438px) {
    .the-whole-mobile-modal input[type="text"],
    .the-whole-mobile-modal input[type="password"] {
      max-width: 438px;
    }

    .save-popup-buttons-mobile {
      margin: 0 auto;
      width: 100vw;
    }
  }

  @media (min-width: 768px) {
    .the-whole-mobile-modal .modal-dialog {
      margin: 0;
      width: 500px !important;
    }

    .the-whole-mobile-modal {
      background-color: initial;
    }

    .popup-mobile-form {
      width: 500px !important;
    }

    .the-whole-mobile-modal input[type="text"],
    .the-whole-mobile-modal input[type="password"] {
      max-width: 438px;
      height: 40px !important;
    }

    .save-popup-buttons-mobile {
      display: flex;
      justify-content: center;
      background-color: initial;
      width: 100%;
    }


    .save-popup-buttons-mobile {
      padding: 1rem 12px;
      position: absolute;
    }
  }

  @media (min-width: 768px) and (max-width: 770px) {
    .the-whole-mobile-modal input[type="text"],
    .the-whole-mobile-modal input[type="password"] {
      max-width: 351px;
    }

    .the-whole-mobile-modal {
      background-color: var(--clr-light);
    }
  }
`;

export const dataTableGeneric = css.global`
  .dataTable-generic-container {
    background: var(--clr-dark);
    height: 40px;
    vertical-align: center;
    color: var(--clr-light);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-family: var(--ff-medium);
    font-size: 16px;
  }

  .dataTable-generic-header {
    padding-left: 30px;
  }

  .dataTable-generic {
    border-left: 1px solid var(--clr-border);
    border-right: 1px solid var(--clr-border);
    border-bottom: 1px solid var(--clr-border);
    margin-bottom: 1rem !important;
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
  }

  .dataTable-generic .table-top {
    background: var(--clr-light);
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    margin-bottom: 1rem !important;
  }

  .dataTable-generic .table thead th {
    border: none !important;
  }

  .dataTable-generic .table thead {
    margin: 0;
  }

  .dataTable-generic .table-body {
    text-align: center !important;
    font-weight: 500 !important;
    font-size: 14px;
  }

  .dataTable-generic .table-body .progress {
    border-radius: 0% !important;
  }

  .dataTable-generic .table.dataTable.no-footer thead {
    background: var(--clr-newDarkgrey) !important;
    color: var(--clr-light) !important;
    font-size: 12px !important;
    text-align: center !important;
    font-family: var(--ff-medium) !important;
    font-weight: 300 !important;
    border-collapse: collapse;
  }

  .dataTable-generic .table.dataTable thead th {
    font-weight: inherit;
    vertical-align: middle;
  }

  table.dataTable thead .sorting {
    background-image: none !important;
  }

  .dataTable-generic .table.dataTable.no-footer thead:not() {
    text-align: center !important;
  }

  .dataTable-generic .dataTables_filter {
    display: none;
  }

  .dataTable-generic .dataTables_info {
    display: none;
  }

  .dataTable-generic .table td {
    vertical-align: middle !important;
    text-align: center;
    border-bottom: none;
  }

  .dataTable-generic table.dataTable.no-footer {
    border-bottom: 1px solid var(--clr-border);
  }

  .dataTable-generic .view-all {
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    font-size: 14px;
    background-color: var(--clr-light);
    font-family: var(--ff-primary);
    text-align: center;
    border-bottom-left-radius: 8px !important;
    border-bottom-right-radius: 8px !important;
    display: flex;
    align-items: center;
  }

  .dataTable-generic .view-all img,
  .dataTable-generic .view-all i {
    margin-left: 4px;
  }

  .dataTable-generic .view-all img {
    width: 11px;
    height: 11px;
  }

  .dataTable-generic .view-all i {
    margin-left: 4px;
    font-size: 17px;
    vertical-align: middle;
  }

  @media (max-width: 770px) {
    .dataTable-generic {
      border-right: 0px;
      border-left: 0px;
      border-bottom: 0px;
      border-radius: 0px !important;
    }

    .dataTable-generic-container {
      font-size: 14px;
    }
  }
`;

