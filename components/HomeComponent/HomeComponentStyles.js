import css from "styled-jsx/css";

export default css`

#home-content .background-new-header {
  width: 100%;
  height: 565px;
  background: var(--clr-dark);
  background-image: url("https://cdn.danelfin.com/assets/images/web/homeBackgroundDesktopv2.webp");
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-new-header img {
  display: none;
}

#home-content a:not(a.name-top:hover, .cols-top-usa a:hover, .enlace-top-us a:hover, .popular-stocks a) {
  text-decoration: none;
}

.home-generic-blue-title {
  font-family: var(--ff-graphicBold);
  color: var(--clr-accent);
  font-size: 32px;
  line-height: 42px;
  margin-bottom: 0px;
}

.img-new-header-link {
  width: 100%;
  height: 100%;
}

#home-content .new-header-content {
  display: flex;
  justify-content: space-between;
  height: 100%;
  position:relative;
}

#home-content .title-new-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:100%;
  margin: auto 70px auto 0;
}

#home-content .title-new-header .home-page-top-search-section,
#home-content .pick-the-best-stocks,
#home-content .the-first-ai-platfor {
  width: 465px;
}


#home-content .title-new-header .home-page-top-search-section {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-end;
  z-index: 100;
}

#home-content .pick-the-best-stocks {
  color: var(--clr-light);
  font-family: var(--ff-graphicBold);
  font-size: 36px;
  line-height: 48px;
  text-align: left;
  margin-bottom: 19px;
}

#home-content .pick-the-best-stocks h2 {
  font-size: 35px;
  line-height: 46px;
  margin-bottom: 0;
}

#home-content .the-first-ai-platfor {
  color: var(--clr-light);
  font-family: var(--ff-primary);
  text-align: left;
  margin-bottom: 30px;
}

#home-content .the-first-ai-platfor p {
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 0;
}

#home-content .popular-stocks {
  color: var(--clr-btn);
  font-family: var(--ff-primary);
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  display: flex;
  align-items: center;
}

.popular-stocks + .popular-stocks {
  margin-top: 12px;
}

#home-content div.popular-stocks:not(.popular-stocks-ranking) {
  margin-top: 18px;
}

.popular-stocks-ranking {
  margin-top: 3px;
}
#home-content .popular-stocks a {
  color: var(--clr-light) !important;
  text-decoration: underline;
}

#home-content .popular-stocks .popular-stocks-sep:not(:last-child):after,
#home-content .popular-stocks-sep-footer:not(:last-child):after {
  content: "";
  border-right: 1px solid #3a608d !important;
  width: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

#home-content .popular-stocks .popular-stocks-title {
  color: #ffffff;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-family: var(--ff-bold);
  width: 134px;
}

#home-content .popular-stocks .popular-stocks-title img {
  width: 14px;
  height: 14px;
  margin-right: 8px;
}

#home-content .popular-stocks.popular-stocks-ranking .popular-stocks-title img {
  width: 12px;
  height: 12px;
  margin-right: 10px;
}

#home-content .popular-stocks.popular-stocks-ranking:last-child .popular-stocks-title img {
  width: 13px;
  height: 13px;
  margin-right: 8px;
}

.view-danelfin-video{
  color: white ;
  display: flex ;
  margin-top: 27px;
  align-items: center; 
  font-size: 16px;
  line-height:20px;
  text-decoration:underline;
  cursor:pointer;
}

#home-content .popular-stocks .popular-stocks-sep,
#home-content .popular-stocks-sep-footer {
  margin-left: 5px;
  margin-right: 5px;
}

#home-content .top-image-home-chart {
  width: 30vw;
}

#home-content .top-image-home-chart img {
  height: 465px;
  position: absolute;
  right: 30.1%;
  top: 150px;
}

#home-content .home-section-tops {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
}

#home-content .home-section-tops .home-title-section {
  align-self: center;
  line-height: 38px;
  margin-top: 49.53px;
  margin-bottom: 12px;
}

#home-content .home-section-tops .subtitle-section {
  color: #272727;
  font-family: var(--ff-primary);
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  display:flex;
  align-items:center;
}


.subtitle-section-last-update-check{
  width: 17px;
  height: 17px;
  margin-right: 6.5px;
}

#home-content .home-section-tops .subtitle-section i {
  color: #61ce70;
  margin-right: 5px;
}

#home-content .home-section-tops .tops-tables {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
}

#home-content .home-section-tops .top-us {
  margin-top: 36px;
  background-color: var(--clr-light);
  border: 1px solid var(--clr-border);
  border-radius: 8px;
  max-width: 95vw;
  width: 400px;
  height: 386px;
}

#home-content .home-section-tops .top-usa-table {
  font-family: var(--ff-primary);
  width: auto;
  max-width: 95vw;
  padding: 0 21px;
}

#home-content .home-section-tops .enlace-top-us {
  text-align: center;
}

#home-content .home-section-tops .enlace-top-us img {
  height: 9px;
  width: 6px;
}

/* TOP 5 */
#home-content .top-usa-table .title-top {
  font-family: var(--ff-graphicBold);
  font-size: 17px;
  line-height: 20px;
  text-align: left;
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
}

#home-content .home-section-tops .top-usa-table .cols-top-usa {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
}

#home-content .link-to-ranking {
  width: 80%;
  font-family: var(--ff-graphicBold);
  display: flex;
  align-items: center;
}

#home-content .home-section-tops .img-top-usa {
  margin-right: 7px;
  max-width: 24px;
  max-height: 14px;
  border-radius: 3px;
}

#home-content .home-section-tops .subtitle-top {
  color: var(--clr-txt);
  font-family: var(--ff-bold);
  font-size: 12px;
  line-height: 32px;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 61px;
}

#home-content .home-section-tops .subtitle-top a {
  font-size: 16px;
}

#home-content .home-section-tops .icono-info {
  cursor: pointer;
  width: 12px;
  padding-bottom: 2px;
  margin-left: 4px;
}

/* donuts */

#home-content .home-section-tops .top-aiscore {
  position: relative;
  width: 61px !important;
  height: 40px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

#home-content .home-section-tops .top-aiscore .home-rounded-number {
  position: absolute;
  vertical-align: middle;
  font-family: var(--ff-medium);
  font-size: 12px;
}

#home-content .home-section-tops .top-aiscore .chartjs-render-monitor,
#home-content .home-section-tops .top-aiscore .chartjs-size-monitor,
#home-content .home-section-tops .top-aiscore .home-rounded-number {
  width: 33px !important;
  height: 33px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

#home-content .home-section-tops .top-aiscore .chartjs-render-monitor {
  margin-bottom: 5px;
}

/* / donuts */

#home-content .rows-top-usa .company-top {
  border-top: 1px solid #e2e2e2;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#home-content .rows-top-usa .top-name-company .position-top {
  margin: 0 20px 0 6px;
}

#home-content .rows-top-usa .top-name-company .name-top {
  cursor: pointer;
}

#home-content .rows-top-usa .top-name-company {
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 75%;
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
}

#home-content .rows-top-usa .top-name-company div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#home-content .enlace-top-us {
  color: var(--clr-links);
  font-family: var(--ff-primary);
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  border-top: 1px solid var(--clr-border);
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* SECTION TOP SELECTOR */

#home-content .selector-tops-section {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  border-bottom: 1px solid var(--clr-border);
  margin: 0 18px 0 14px;
}

#home-content .selector-tops-section .selector-tops {
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  margin-right: 10px;
}

#home-content .selector-tops-section .tittle-section {
  font-family: var(--ff-bold);
  font-size: 15px;
  line-height: 32px;
}

#home-content .selector-tops-section .selector-tops img {
  align-self: center;
  height: 14px;
  margin-right: 3px;
}

#home-content .selector-tops-section .selector-tops .fa-angle-down {
  align-self: center;
  font-size: 16px;
}

#home-content .selector-tops-section .selector-tops span {
  color: #272727;
  font-family: var(--ff-bold);
  font-size: 18px;
  margin-right: 5px;
}

/* DROPDOWN COMPANIES */

#home-content .selector-tops-company {
  width: 173px;
  height: 386px;
  background-color: var(--clr-light);
  margin-top: 36px;
  border: 1px solid var(--clr-border);
  border-radius: 6px;
}

#home-content .dropdown-company-selector {
  background: var(--clr-light);
  font-family: var(--ff-medium);
  font-size: 15px;
  line-height: 18px;
  color: var(--clr-links);
}

#home-content .list-countries-box {
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 315px;
  margin-left: 14px;
}

#home-content .list-country {
  width: 100%;
  height: 41px;
  display: flex;
  align-items: center;
}

#home-content .country-element {
  cursor: pointer;
  display: flex;
}

#home-content .country-element:hover {
  text-decoration: underline;
}

#home-content .enlace-country:not(:last-child) .country-element {
  border-bottom: 1px solid var(--clr-border);
  height: 41px;
  display: flex;
  align-items: center;
  width: 141px;
}

#home-content .list-countries-box .enlace-country {
  text-decoration: none !important;
  display: flex;
  align-items: center;
}

#home-content .list-country a {
  text-decoration: none;
}

#home-content .list-country img {
  margin-right: 12px;
  margin-bottom: 3px;
  width: 18px;
  min-width: 18px;
  height: 11px;
  border-radius: 2px;
}

#home-content .list-country .content-country {
  color: var(--clr-links);
  font-family: var(--ff-primary);
  font-size: 15px;
  line-height: 18px;
  text-align: left;
  display: flex;
  align-items: center;
}

@home-content .text-nowrap {
  white-space: nowrap;
}

.country-element-down-arrow-home {
  display: none;
}

.home-tops-cose-icon {
  display: none;
}

.home-search-content {
  display: none;
}

a.home-call-to-action-button {
  background-color: var(--clr-accent);
  color: var(--clr-light) !important;
  margin: 50px 0 0;
  height: 50px;
  width: 380px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  line-height: 20px;
  font-family: var(--ff-medium);
}

.home-call-to-action-button:hover {
  text-decoration: none;
}

/* PROFESIONAL STOCK */
#home-content .professional-stock {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 54px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#home-content .professional-stock .professional-stock-header,
#home-content .professional-stock .profesional-stock-container {
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#home-content .professional-stock .professional-stock-header-title {
  line-height: 54px;
  margin-bottom: 0px;
}
#home-content .professional-stock .professional-stock-header-subtitle span {
  color: var(--clr-txt);
  font-family: var(--ff-primary);
  font-size: 16px;
  line-height: 26px;
  margin-top: 6px;
  text-align: center;
  max-width: 95vw;
  width: 717px;
  display: flex;
}

#home-content .professional-stock .professional-stock-title {
  color: var(--clr-accent);
  font-family: var(--ff-bold);
  font-size: 32px;
  line-height: 46px;
}

#home-content .professional-stock .professional-stock-subtitle {
  color: var(--clr-txt);
  font-family: var(--ff-primary);
  font-size: 16px;
  margin-top: 6px;
}

#home-content .professional-stock .profesional-stock-general-content {
  margin-top: 37px;
  display: flex;
  justify-content: flex-end;
  width: 801px;
  max-width: 95vw;
  height: 246px;
  position: relative;
}

.profesional-stock-curved-arrow {
  width: 750px;
  max-width: 85vw;
  height: 38%;
  position: absolute;
  bottom: 10px;
  left: 25px;
}

.profesional-stock-aiscores img {
  position: absolute;
  z-index: 0;
  width: 112px;
  max-width: 13vw;
  height: auto;
  max-height: 149px;
}

.profesional-stock-aiscores img:first-child {
  left: 0;
  bottom: 31px;
}
.profesional-stock-aiscores img:nth-child(2) {
  left: 9.85%;
  bottom: 35px;
}
.profesional-stock-aiscores img:nth-child(3) {
  left: 19.7%;
  bottom: 38px;
}
.profesional-stock-aiscores img:nth-child(4) {
  left: 29.6%;
  bottom: 43px;
}
.profesional-stock-aiscores img:nth-child(5) {
  left: 39.4%;
  bottom: 51px;
}
.profesional-stock-aiscores img:nth-child(6) {
  left: 49.3%;
  bottom: 60px;
}
.profesional-stock-aiscores img:nth-child(7) {
  left: 59.1%;
  bottom: 72px;
}
.profesional-stock-aiscores img:nth-child(8) {
  left: 69%;
  bottom: 85px;
}
.profesional-stock-aiscores img:nth-child(9) {
  left: 78.9%;
  bottom: 98px;
}
.profesional-stock-aiscores img:nth-child(10) {
  left: 88.7%;
  bottom: 117px;
}

.professional-stock-levels {
  max-width: 95%;
  width: 800px;
  margin: 10px auto 0;
  display: flex;
  justify-content: space-between;
  font-family: var(--ff-medium);
  font-size: 16px;
  line-height: 19px;
  padding: 0 20px 0 45px;
}

.professional-stock-probability {
  font-family: var(--ff-medium);
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  margin-top: 26px;
  padding: 0 12px 0;
}

.home-best-stocks-rankings {
  background: var(--clr-light);
  padding: 40px 0 ;
}

.home-best-stocks-rankings-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 95vw;
  width: 1041px;
  margin: 0 auto;
}

.home-best-stocks-rankings-item:first-child
  .home-best-stocks-rankings-image
  img {
  max-width: 50vw;
  max-height: auto;
  width: 560px;
  height: 370px;
}
.home-best-stocks-rankings-item:last-child
  .home-best-stocks-rankings-image
  img {
  max-width: 50vw;
  max-height: auto;
  width: 500px;
  height: 461px;
}

.home-best-stocks-rankings-item:last-child {
  flex-direction: row-reverse;
}

.home-best-stocks-rankings-item + .home-best-stocks-rankings-item {
  margin-top: 26px;
}

.home-best-stocks-rankings-text {
  min-height: 330px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}


.home-best-stocks-rankings-text-title {
  color: var(--clr-accent);
  font-size: 32px;
  font-family: var(--ff-graphicBold);
  line-height: 32px;
}

.home-best-stocks-rankings-text-description {
  font-size: 16px;
  line-height: 26px;
  margin-top: 18px;
}

.home-best-stocks-rankings-text-description p:last-child{
  margin-bottom: 0px;
}

.home-best-stocks-rankings-item:first-child
  .home-best-stocks-rankings-text-description {
  max-width: 430px;
}
.home-best-stocks-rankings-item:last-child
  .home-best-stocks-rankings-text-description {
  max-width: 414px;
}

#home-content .data-analyzed {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: var(--clr-dark);
  background-image: url("https://cdn.danelfin.com/assets/next/images/homepage/dataAnalytics2.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
}

#home-content .data-analyzed .data-analyzed-title {
  color: var(--clr-light);
  font-family: var(--ff-graphicBold);
  font-size: 32px;
  line-height: 46px;
}

.data-analyzed .data-analyzed-body {
  width: 50vw;
  max-width: 388px;
}

#home-content .data-analyzed .data-analyzed-title {
  width: 50vw;
  max-width: 425px;
}

.data-analyzed .data-analyzed-footer {
  width: 45vw;
  max-width: 443px;
}

.data-analyzed-body-container {
  width: 100%;
  max-width: 1000px;
  margin: 50px auto 60px;
}

#home-content .data-analyzed .data-analyzed-body {
  display: flex;
  justify-content: space-evenly;
  padding: 13px 0 15px;
}

#home-content .data-analyzed .data-analyzed-body .data-points,
#home-content .data-analyzed .data-analyzed-body .data-indicators,
#home-content .data-analyzed .data-analyzed-body .data-indicators-used {
  color: var(--clr-accent);
  width: 33%;
  padding-left: 12px;
  display: flex;
  flex-direction: column;
}

#home-content .data-analyzed .data-analyzed-body .data-points {
  padding-left: 0;
}

#home-content .data-analyzed .data-analyzed-body .data-indicators-used {
  padding-right: 0;
}

#home-content .data-analyzed .data-analyzed-body .data-indicators,
#home-content .data-analyzed .data-analyzed-body .data-indicators-used {
  border-left: 1px solid #3a608d;
}

#home-content .data-analyzed .data-analyzed-body .data-points .data-value,
#home-content .data-analyzed .data-analyzed-body .data-indicators .data-value,
#home-content
  .data-analyzed
  .data-analyzed-body
  .data-indicators-used
  .data-value {
  font-family: var(--ff-graphicBold);
  font-size: 24px;
  white-space: nowrap;
  line-height: 38px;
  width: 100%;
}

#home-content .data-analyzed .data-analyzed-body .data-points .data-description,
#home-content
  .data-analyzed
  .data-analyzed-body
  .data-indicators
  .data-description,
#home-content
  .data-analyzed
  .data-analyzed-body
  .data-indicators-used
  .data-description {
  font-family: var(--ff-primary);
  font-size: 15px;
  text-align: left;
  line-height: 20px;
  width: 103px;
  max-width: 33vw;
}

#home-content .data-analyzed .data-analyzed-footer {
  color: var(--clr-light);
  font-size: 16px;
  font-family: var(--ff-primary);
  line-height: 26px;
  max-width: 403px;
}

.data-analyzed-how-it-works-container {
  width: 162px;
  display: flex;
  margin-top: 53px;
}

.data-analyzed-how-it-works-container:hover {
  text-decoration: none;
}

.data-analyzed-how-it-works {
  background-color: var(--clr-accent);
  color: var(--clr-light);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--ff-medium);
  font-size: 17px;
  line-height: 20px;
  width: 162px;
  height: 50px;
}

/* use cases */
.home-use-cases {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 51px;
  padding-bottom: 50px;
}

.use-cases-items-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  max-width: 95vw;
}

.use-cases-text-items {
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.use-cases-items-container img {
  max-width: 510px;
  margin: 15px -12px 0 0;
}

.use-cases-images-container img.use-cases-image-hidden {
  display: none;
}

.use-cases-title {
  display: flex;
  justify-content: center;
  margin-bottom: 46px;
  line-height: 32px;
}

.use-cases-item {
  width: 502px;
  max-width: 95vw;
  margin: 0 auto;
  padding: 15px 18px;
}

.use-cases-item + .use-cases-item {
  border-top: 1px solid var(--clr-border);
}

.use-cases-item .use-cases-item-title {
  font-family: var(--ff-graphicSemibold);
  font-size: 18px;
  line-height: 26px;
  color: var(--clr-accent);
  cursor: pointer;
  position: relative;
  z-index: 2;
}

.use-cases-item-active .use-cases-item-title {
  font-size: 22px;
  line-height: 32px;
  color: var(--clr-accent);
  font-family: var(--ff-graphicSemibold);
  cursor: pointer;
  position: relative;
  z-index: 2;
  max-width: 359px;
}

.use-cases-item-active {
  width: 502px;
  max-width: 100vw;
  margin: 0 auto;
  padding: 30px;
  position: relative;
  background-image: url("https://d3qhwwfkmzmxm8.cloudfront.net/assets/next/images/homepage/useCase1.png");
  background-repeat: no-repeat;
  background-size: 100% 99%;
}

.use-cases-item-text {
  font-family: var(--ff-primary);
  font-size: 16px;
  line-height: 26px;
  margin-top: 7px;
  max-width: 402px;
}

.home-use-cases a.home-call-to-action-button {
  width: 372px;
  margin: 50.15px auto 0;
}

.use-cases-mobile {
  display: none;
}

/* / use cases  */
/* future section */

.home-future-section {
  text-align: center;
  background:white;
  padding-bottom:50px;
}

.home-future-section-title {
  line-height: 44px;
  width: 100vw;
  max-width: 833px;
  margin: 0 auto;
  padding: 50px 0 20px;
}

.home-future-section-description {
  width: 100vw;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 26px;
}
.home-future-section-description div:last-child {
  width: 100vw;
  max-width: 964px;
  padding-bottom: 52px;
  margin: 16px auto 0;
}

.home-future-section-video h5 {
  color: var(--clr-accent);
  font-size: 18px;
  line-height: 24px;
  font-family: var(--ff-graphicSemibold);
  margin-bottom: 16px;
}

.danelfin-yt-embed-video {
  width: 100%;
  height: calc(100vw / 1.77);
  max-width: 802px;
  max-height: 452px;
  margin: 0 auto 0 auto;
}


/* / future section */

#home-content .home-featured-in {
  background-color: var(--clr-background);
  height: 230px;
  padding:50px auto;
}

/* start making smarter decisions */
.start-making-smart-decissions {
  padding: 54px 0 50px;
  background-color: var(--clr-light);
  text-align: center;
}

.start-making-smart-decissions h2 {
  margin-bottom: 8px;
}

.start-making-smart-decissions p {
  font-size: 16px;
  line-height: 26px;
}

.start-making-smart-decissions a {
  background-color: var(--clr-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  color: var(--clr-light) !important;
  width: 95vw;
  max-width: 164px;
  height: 50px;
  font-size: 17px;
  line-height: 20px;
  margin: 24px auto 0;
  cursor: pointer;
}
/* / start making smarter decisions */

.Typewriter__cursor {
  display: none;
}

#home-content .what-users-say-container {
  background-color: var(--clr-light);
}

@media (max-width: 1024px) {
  #home-content {
    width: 100%;
    max-width: 100vw;
  }

  .home-generic-blue-title {
    font-size: 22px;
    line-height: 32px;
  }

  .background-new-header-container {
    background-color: var(--clr-dark);
    padding-top: 26px;
  }

  #home-content .background-new-header {
    width: 100%;
    height: auto;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-color: var(--clr-dark);
    background-image: none;
    background-size: cover;
    max-width: 100vw;
    display: flex;
    justify-content: center;
  }

  #home-content .new-header-content {
    display: flex;
    flex-direction: column;
    align-self: start;
    justify-content: center;
    width: 100%;
    max-width: 100%;
  }

  #home-content .title-new-header {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-right: 0px;
    width: 100%;
    max-width: 100%;
    height: auto;
    max-height: fit-content;
    margin-top: 0;
  }

  .img-new-header-link {
    width: 100%;
    height: 497px;
    overflow: hidden;
    margin-top: -97px;
  }

  #home-content .top-image-home-chart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 25px 0 0 0;
    padding: 0;
  }

  #home-content .top-image-home-chart img {
    height: auto;
    width: 250px;
    max-width: 70px;
    margin-bottom: 0;
    padding-top: 205px;
    display: inline-block;
  }

  #home-content .the-first-ai-platfor p {
    font-size: 17px;
  }

  #home-content .pick-the-best-stocks h2,
  #home-content .the-first-ai-platfor p,
  #home-content div.popular-stocks {
    padding: 0 11px;
  }

  #home-content .pick-the-best-stocks {
    margin-bottom: 0;
  }

  #home-content .title-new-header .home-page-top-search-section {
    width: 100%;
  }

  #home-content .pick-the-best-stocks {
    color: var(--clr-light);
    font-family: var(--ff-graphicBold);
    font-size: 26px;
    line-height: 37px;
    width: 100%;
    text-align: left;
    margin-top: 0px;
  }

  #home-content .pick-the-best-stocks h2 {
    font-size: 26px;
    line-height: 38px;
    margin: 0px;
  }

  #home-content .the-first-ai-platfor {
    color: var(--clr-light);
    font-family: var(--ff-primary);
    font-size: 17px;
    line-height: 28px;
    width: 100%;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 16px;
  }

  #home-content div.popular-stocks:not(.popular-stocks-ranking) {
    margin-top: 11px;
    width: 100%;
  }

  #home-content .popular-stocks .popular-stocks-title img {
    width: 15px;
    height: 14px;
    margin-right: 6px;
  }

  .view-danelfin-video{
    margin-top: 23px;
    font-size: 14px;
    padding-left:11px;
  }

  #home-content
    .popular-stocks.popular-stocks-ranking
    .popular-stocks-title
    img {
    width: 13px;
    height: 12px;
    margin-right: 8px;
  }

  #home-content .home-featured-in {
    height: 200.85px;
  }

  #home-content .popular-stocks.popular-stocks-ranking .popular-stocks-title img {
    width: 12px;
    height: 12px;
  }

  #home-content .popular-stocks.popular-stocks-ranking:last-child 
  .popular-stocks-title img,
  #home-content .popular-stocks.popular-stocks-ranking .popular-stocks-title img {
    margin-right: 6px;
    margin-left: 2px;
  }

  #home-content .popular-stocks {
    margin-top: 11px;
    color: var(--clr-btn);
    font-family: var(--ff-primary);
    font-size: 14px;
    line-height: 24px;
    width: 334px;
  }

  #home-content .popular-stocks .popular-stocks-title {
    color: #ffffff;
    margin-right: 10px;
  }

  #home-content .popular-stocks.popular-stocks-ranking {
    margin-top: 8px;
  }

  #home-content .popular-stocks .popular-stocks-sep {
    margin-left: 10px;
    margin-right: 10px;
  }

  

  #home-content .rows-top-usa .top-name-company .name-top {
    cursor: pointer;
    font-size: 14px;
  }


  #home-content .home-section-tops {
    display: flex;
    justify-content: center;
    height: auto;
    padding-bottom: 0;
  }

  #home-content .home-section-tops .home-title-section {
    line-height: 32px;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 300px;
    text-align: center;
  }

  #home-content .home-section-tops .subtitle-section {
    color: #272727;
    font-family: var(--ff-primary);
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    padding: 0 12px;
  }

  #home-content .home-section-tops .subtitle-section i {
    color: #61ce70;
  }

  #home-content .home-section-tops .tops-tables {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #home-content .home-section-tops .top-usa-table {
    margin-right: 0px;
    padding: 0px;
  }

  #home-content .home-section-tops .top-us {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 28px;
  }

  #home-content .home-section-tops .top-us + .top-us {
    margin-top: 10px;
  }

  #home-content .list-countries-box .enlace-country:not(:nth-child(3)) {
    display: none;
  }

  #home-content .selector-tops-company.selector-tops-company-open {
    position: fixed;
    background-color: var(--clr-light);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999999;
    width: 100vw;
    height: 100vh;
    max-width: 100vw;
    margin-top: 0px;
    border-radius: 0px;
  }

  #home-content
    .selector-tops-company.selector-tops-company-open
    .selector-tops-section {
    background-color: var(--clr-accent);
    color: var(--clr-light);
    display: flex;
    justify-content: space-between;
  }

  #home-content
    .selector-tops-company.selector-tops-company-open
    .selector-tops-section
    .tittle-section {
    font-family: var(--ff-medium);
    padding: 0 12px;
  }

  a.home-call-to-action-button {
    width: 351px;
    height: 55px;
    font-size: 16px;
    line-height: 20px;
    margin: 0px auto 30px;
    max-width: 95vw;
  }

  .home-section-tops a.home-call-to-action-button {
    margin: 0px auto 30px;
  }

  .home-call-to-action-button div {
    max-width: 234px;
    text-align: center;
  }

  .selector-tops-company-open .home-tops-cose-icon {
    display: inline-block;
    margin-right: 12px;
    filter: brightness(0) invert(100%);
    width: 20px;
    height: 21px;
  }

  .selector-tops-company .home-search-content {
    display: none;
  }

  #home-content .selector-tops-company-open .list-countries-box {
    max-height: 80vh;
    max-width: 440px;
    margin: 0 auto;
  }

  .selector-tops-company.selector-tops-company-open .home-search-content {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 440px;
    max-width: 100vw;
    color: var(--clr-txtgrey);
    margin: 0 auto;
    padding: 15px 12px;
    border-bottom: 1px solid var(--clr-border);
  }

  .selector-tops-company.selector-tops-company-open .home-search-content input {
    width: 100%;
    height: 50px;
    max-width: 95vw;
    font-family: var(--ff-primary);
    padding: 0 25px 0 12px;
  }

  .home-search-content img {
    position: absolute;
    right: 20px;
    font-size: 17px;
  }

  .selector-tops-company-open
    .dropdown-company-selector
    .country-element-down-arrow-home {
    display: none;
  }

  #home-content
    .selector-tops-company-open
    .dropdown-company-selector
    .list-countries-box
    .enlace-country {
    display: flex;
  }

  #home-content .selector-tops-company:not(.selector-tops-company.selector-tops-company-open) {
    width: 95vw;
    max-width: 400px;
    height: 133px;
    margin: 10px auto 30px;
  }

  #home-content .enlace-country,
  #home-content .enlace-country a {
    width: 100%;
    max-width: 400px;
  }

  .country-element-down-arrow-home {
    display: inline-block;
  }

  #home-content .enlace-country:not(:last-child) .country-element,
  #home-content .list-country .content-country {
    width: 100%;
    color: var(--clr-txt);
    font-family: var(--ff-medium);
  }

  #home-content .selector-tops-company-open .enlace-country .country-element,
  #home-content .list-country {
    height: 60px;
  }

  #home-content .selector-tops-company .enlace-country .country-element {
    padding: 0 12px;
    display: flex;
    align-items: center;
  }

  #home-content
    .selector-tops-company:not(.selector-tops-company.selector-tops-company-open)
    .enlace-country
    .country-element {
    border-bottom: 0px !important;
    height: 64px;
  }

  #home-content
    .selector-tops-company:not(.selector-tops-company.selector-tops-company-open)
    .list-countries-box {
    overflow: visible;
    height: 64px;
    margin-left: 0;
  }

  #home-content .selector-tops-company .enlace-country .country-element {
    display: flex;
    justify-content: space-between;
  }

  #home-content .selector-tops-company:not(.selector-tops-company.selector-tops-company-open) a {
    pointer-events: none;
  }

  .country-element-down-arrow-home {
    color: var(--clr-newDarkgrey);
    font-size: 20px;
  }

  #home-content .selector-tops-section {
    margin: 0;
    display: flex;
    justify-content: flex-start;
    height: 65px;
  }

  #home-content .selector-tops-section .tittle-section {
    font-size: 18px;
    line-height: 32px;
    padding-left: 11px;
  }

  #home-content .home-section-tops .top-usa-table {
    width: 100%;
    max-width: 100vw;
    white-space: nowrap;
    margin-top: 0;
    border-radius: 9px;
  }

  #home-content .home-section-tops .top-usa-table .cols-top-usa,
  #home-content .rows-top-usa .company-top {
    padding: 0 20px;
    height: 65px;
  }

  #home-content .home-section-tops .redirect-to-top {
    display: flex;
    justify-content: center;
  }

  /* TOP 5 */
  #home-content .home-section-tops .title-top {
    font-size: 18px;
    text-align: left;
  }

  #home-content .home-section-tops .subtitle-top {
    font-size: 12px;
    line-height: 32px;
  }

  #home-content .enlace-top-us {
    font-size: 14px;
    width: 100%;
  }

  #home-content .professional-stock {
    padding: 0;
    max-width: 100%;
  }

  #home-content .professional-stock .professional-stock-header-title {
    line-height: 32px;
    width: 304px;
    padding: 30px 12px 0;
  }

  #home-content .professional-stock-header {
    width: 304px;
    max-width: 100%;
    text-align: center;
  }

  .professional-stock-levels,
  .professional-stock-probability {
    font-size: 10px;
    line-height: 12px;
  }

  .professional-stock-levels {
    margin-top: 11px;
    padding: 0 12px 0 27px;
  }

  .professional-stock-probability {
    margin-top: 15px;
  }

  #home-content .professional-stock .professional-stock-header-subtitle {
    font-size: 14px;
    line-height: 24px;
    margin-top: 17px;
    padding: 0 12px;
  }

  #home-content .professional-stock .professional-stock-header-subtitle span {
    width: 100%;
    font-size:14px;
  }

  #home-content .professional-stock .professional-stock-description {
    align-self: center;
  }

  #home-content
    .professional-stock
    .professional-stock-description
    .professional-stock-title {
    font-size: 18px;
    width: 100%;
    max-width: 343px;
  }
  #home-content
    .professional-stock
    .professional-stock-description
    .professional-stock-subtitle {
    font-size: 14px;
    line-height: 24px;
    max-width: 351px;
    width: 100%;
  }

  #home-content .professional-stock .professional-stock-description {
    margin-top: 26px;
    margin-bottom: 14px;
  }

  #home-content .professional-stock .profesional-stock-general-content {
    margin-top: 30px;
    max-width: 90vw;
  }

  .home-best-stocks-rankings-item,
  .home-best-stocks-rankings-item:last-child {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .home-best-stocks-rankings {
    padding: 31px 0 25px;
  }

  .home-best-stocks-rankings-text {
    min-height: auto;
  }

  .home-best-stocks-rankings-item + .home-best-stocks-rankings-item {
    margin-top: 35px;
  }

  .home-best-stocks-rankings-text-title {
    line-height: 32px;
  }

  .home-best-stocks-rankings-item {
    padding: 0 12px;
  }

  /* use cases */

  #home-content .home-use-cases {
    padding: 30px 0 0;
  }

  .use-cases-title {
    margin-bottom: 20px;
  }

  .use-cases-desktop {
    display: none;
  }

  .use-cases-mobile {
    display: flex;
    padding-bottom: 0px;
  }

  .use-cases-item {
    padding: 23px 0;
    max-width: 100vw;
  }

  .use-cases-item:last-child {
    padding-bottom: 0;
  }

  .use-cases-item:first-child {
    padding-top: 17px;
  }

  .use-cases-text-items {
    height: auto;
  }

  .use-cases-text-items img {
    max-width: 100vw;
    width: 100%;
  }

  .home-use-cases a.home-call-to-action-button {
    margin-top: 0px;
    margin-bottom: 30px;
    max-width: 95vw;
  }

  .use-cases-item-text-wrapper {
    max-width: 95vw;
    margin: 0 auto;
  }

  .use-cases-text-items div:first-child {
    font-family: var(--ff-graphicBold);
    color: var(--clr-accent);
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 8px;
  }
  .use-cases-text-items div:last-child {
    color: var(--clr-txt);
    font-family: var(--ff-primary);
    font-size: 14px;
    line-height: 24px;
  }

  /* / use cases */

  #home-content .data-analyzed .data-analyzed-title,
  .data-analyzed .data-analyzed-body {
    width: 95vw;
    text-align: center;
  }

  #home-content .data-analyzed .data-analyzed-title {
    font-size: 22px;
    line-height: 32px;
    text-align: center;
    width: 85vw;
    margin-bottom: 0;
  }

  #home-content .data-analyzed .data-analyzed-footer {
    width: 86vw;
    margin-top: 10px;
    margin-bottom: 369px;
    line-height: 24px;
    font-size: 14px;
    text-align: center;
  }

  #home-content .data-analyzed {
    justify-content: center;
    background-image: url("https://cdn.danelfin.com/assets/next/images/homepage/dataAnalyticsMobile2.png");
    background-position: bottom;
    background-size: 100%;
  }

  .data-analyzed-body-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 41px;
  }

  #home-content .data-analyzed .data-analyzed-body {
    display: flex;
    flex-direction: column;
    padding: 4px 0 5px;
  }

  .data-analyzed-how-it-works,
  .data-analyzed-how-it-works-container {
    width: 440px;
    max-width: 95vw;
    height: 55px;
  }

  #home-content .data-analyzed .data-analyzed-body .data-points,
  #home-content .data-analyzed .data-analyzed-body .data-indicators,
  #home-content .data-analyzed .data-analyzed-body .data-indicators-used {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    border: 0px;
    padding: 0;
  }

  #home-content .data-analyzed .data-analyzed-body .data-points .data-value,
  #home-content .data-analyzed .data-analyzed-body .data-indicators .data-value,
  #home-content
    .data-analyzed
    .data-analyzed-body
    .data-indicators-used
    .data-value {
    font-size: 30px;
    line-height: 36px;
    justify-self: center;
  }

  #home-content
    .data-analyzed
    .data-analyzed-body
    .data-points
    .data-description,
  #home-content
    .data-analyzed
    .data-analyzed-body
    .data-indicators
    .data-description,
  #home-content
    .data-analyzed
    .data-analyzed-body
    .data-indicators-used
    .data-description {
    font-size: 16px;
    text-align: center;
    width: 100%;
    max-width: 100%;
    flex-wrap: nowrap;
    font-family: var(--ff-bold);
    margin-top: 1px;
  }

  .improve-populars-stocks {
    margin-left: 0px;
  }

  #home-content .data-analyzed .data-analyzed-body .data-points .data-value,
  #home-content .data-analyzed .data-analyzed-body .data-indicators .data-value,
  #home-content
    .data-analyzed
    .data-analyzed-body
    .data-indicators-used
    .data-value {
    text-align: center !important;
    margin-right: 0px !important;
  }

  
}

@media (max-width: 1024px) and (min-width: 500px) {
  #home-content .popular-stocks {
    width: auto;
  }

  #home-content .title-new-header {
    max-width: 500px;
  }

  #home-content .top-image-home-chart img {
    max-width: 375px;
  }

}

@media (max-width: 770px) {
  /* AI SCORES */
${'' /* dsadasda */}
  .subtitle-section-last-update-check{
    margin-right:8px;
  }

  .profesional-stock-aiscores img {
    pointer-events: none;
  }

  .profesional-stock-aiscores img:first-child {
    left: 0;
    bottom: 12%;
  }
  .profesional-stock-aiscores img:nth-child(2) {
    left: 9.85%;
    bottom: 13.8%;
  }
  .profesional-stock-aiscores img:nth-child(3) {
    left: 19.7%;
    bottom: 15.75%;
  }
  .profesional-stock-aiscores img:nth-child(4) {
    left: 29.6%;
    bottom: 17.6%;
  }
  .profesional-stock-aiscores img:nth-child(5) {
    left: 39.4%;
    bottom: 20.37%;
  }
  .profesional-stock-aiscores img:nth-child(6) {
    left: 49.3%;
    bottom: 24.07%;
  }
  .profesional-stock-aiscores img:nth-child(7) {
    left: 59.1%;
    bottom: 28.7%;
  }
  .profesional-stock-aiscores img:nth-child(8) {
    left: 69%;
    bottom: 34.25%;
  }
  .profesional-stock-aiscores img:nth-child(9) {
    left: 78.9%;
    bottom: 40.74%;
  }
  .profesional-stock-aiscores img:nth-child(10) {
    left: 88.7%;
    bottom: 49.07%;
  }

  .profesional-stock-curved-arrow {
    bottom: 5px;
  }

  /* / AI SCORES */

  .home-best-stocks-rankings-text-description {
    font-size: 14px;
    line-height: 24px;
    margin-top: 17px;
  }

  .home-best-stocks-rankings-text-description p:last-child {
    margin: 0;
  }

  .home-best-stocks-rankings-item:first-child
    .home-best-stocks-rankings-image
    img {
    width: 70vw;
    max-width: 85vw;
    height: auto;
  }
  .home-best-stocks-rankings-item:last-child
    .home-best-stocks-rankings-image
    img {
    width: 100vw;
    max-width: 100vw;
    height: auto;
  }

  /* start making smarter decisions */
  .start-making-smart-decissions {
    padding: 30px 12px 40px;
    background-color: var(--clr-light);
    text-align: center;
  }

  .start-making-smart-decissions h2 {
    margin-bottom: 7px;
  }

  .start-making-smart-decissions p {
    font-size: 14px;
    line-height: 24px;
  }

  .start-making-smart-decissions a {
    width: 100%;
    max-width: 440px;
    height: 55px;
    font-size: 16px;
    margin: 30px auto 0;
  }
  /* / start making smarter decisions */
  .home-future-section {
    padding: 0;
  }

  .home-future-section-title {
    padding: 30px 12px 15px;
    width: 100%;
  }

  .home-future-section-description div{
    line-height:24px;
  }

  .home-future-section-description,
  .home-future-section-description div:last-child {
    width: 100%;
    font-size: 14px;
    padding: 0 12px;
  }

  .home-future-section-description div:last-child {
    padding-bottom: 30px;
  }

  .home-future-section-video {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .danelfin-yt-embed-video {
    margin: 0;
    padding: 0;
  }

  .professional-stock-probability{
    padding: 0 12px 38px;
  }
}

@media (max-width: 500px) {
  #home-content .popular-stocks a:nth-child(8),
  #home-content .popular-stocks a:nth-child(10),
  #home-content .popular-stocks .popular-stocks-sep:nth-child(7),
  #home-content .popular-stocks .popular-stocks-sep:nth-child(9) {
    display: none;
  }

  .img-new-header {
    display: flex;
    justify-content: center;
    position:relative;
  }

  .img-new-header .background-img {
    height: 595px;
    width: auto !important;
    display: block;
  }

  .img-new-header-link {
    height: auto;
  }

  #home-content .professional-stock .profesional-stock-general-content {
    height: 108px;
  }

  #home-content .data-analyzed {
    background-size: 150%;
  }

  #home-content .data-analyzed .data-analyzed-footer {
    margin-bottom: 350px;
    margin-top: 0;
  }

  .home-what-users-say {
    min-height: auto;
  }
}
@media (max-width: 374px) {
  #home-content .background-new-header {
    background-size: 950px;
  }
  
  #home-content .background-new-header {
      margin-top: 0px;
  }

  #home-content .title-new-header {
    margin-top: 0px;
  }

  #home-content .popular-stocks {
    font-size: 13px;
    width: 95vw;
  }
  #home-content
    .featured-section
    .featured-companies
    .featured-logo-citywire
    img {
    height: auto;
    width: 72px;
  }

  #home-content
    .featured-section
    .featured-companies
    .featured-logo-investment
    img {
    height: auto;
    width: 100px;
  }

  #home-content
    .featured-section
    .featured-companies
    .featured-logo-kiplinger
    img {
    height: auto;
    width: 69px;
  }

  #home-content
    .featured-section
    .featured-companies
    .featured-logo-benzinga
    img {
    height: auto;
    width: 87px;
  }

  #home-content
    .featured-section
    .featured-companies
    .featured-logo-finimize
    img {
    height: auto;
    width: 156.42px;
  }
  #home-content
    .featured-section
    .featured-companies
    .featured-logo-milano
    img {
    height: auto;
    width: 93px;
  }
}

@media (min-width: 1450px) {
  #home-content .background-new-header {
    max-height: 860px;
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    background-color: var(--clr-dark);
    display: flex;
    margin-top: -3px;
    padding-top: 30px;
  }

  .home-page-background-align {
    width: 100vw;
    background-color: var(--clr-dark);
  }
}

`;

