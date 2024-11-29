import css from 'styled-jsx/css';

export default css`
.smart-score-punctuation-container {
  font-family: var(--ff-medium);
  font-size: var(--fs-med);
  line-height: 18px;
  display: flex;
  justify-content: flex-end;
}

.blur-effect {
  filter: blur(3px);
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pointer_cursor{
  cursor:pointer;
}

.smart-score-punctuation-section-big {
  position: relative;
  text-align: center;
  border: 1px solid var(--clr-border);
  border-radius: 8px;
  padding: 13px 18px;
  height: 141px;
  width: 109px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  line-height: 17px;
}
  .smart-score-punctuation-section--row {
    display: flex;
    flex-direction: row;
    position: relative;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
  }

  .smart-score-big-ticker{
    height: 159px;
    width: 113px;
    padding: 8px 0;
  justify-content: space-between;
  }
  
  .smart-score-punctuation-section--row .doughnut-component-container-number {
    margin-top: 13px;
  }

.smart-score-punctuation-section-big-aiscore img {
  margin-left: 6px;
  margin-bottom: 3px;
  width: 11px;
  height: 12px;
  cursor: pointer;
}

.smart-score-punctuation-section-big-aiscore {
  display: flex;
  align-items: center;
}
  
  .smart-score-punctuation-section--row .smart-score-punctuation-section-big-aiscore {
    margin-right: 10px;
  }

.ticker-page-smart-scores{
  height:159px;
  display:flex;
  align-items:center;
}

.smart-score-puntuations-small {
  padding: 6px 0 5px 15px;
  height: 141px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.analysis-smart-score{
  padding-top:0;
  padding-bottom:0;
}

.smart-score-puntuations-small .smart-score-punctuation-section span {
  font-size: var(--fs-small) !important;
  display: flex;
  align-items: center;
  justify-content: center;
}

.smart-score-puntuations-small .rounded-description {
  font-family: var(--ff-primary) !important;
  padding-left: 6px;
  white-space: nowrap;
}

.smart-score-punctuation-section {
  position: relative;
  display: flex;
}
  
  .doughnut-component-container-number {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fs-huge) !important;
  font-family: var(--ff-bold);
  margin-top:2px;
  -webkit-animation: fadeinAiScore 2.9s;
  -moz-animation: fadeinAiScore 2.9s;
  -ms-animation: fadeinAiScore 2.9s;
  -o-animation: fadeinAiScore 2.9s;
  animation: fadeinAiScore 2.9s;
}

.hold-or-sell-section {
  -webkit-animation: fadeinAiScore 2.9s;
  -moz-animation: fadeinAiScore 2.9s;
  -ms-animation: fadeinAiScore 2.9s;
  -o-animation: fadeinAiScore 2.9s;
  animation: fadeinAiScore 2.9s;
  font-family: var(--ff-bold);
}

.hos-aiscore{
  margin-bottom:2px;
  z-index:1;
}

.ticker-analysis-button{
  color:var(--clr-links);
  padding-top: 6px;
  width: 100%;
  font-size:14px;
  font-family: var(--ff-primary);
  border-top: 1px solid var(--clr-border);
  cursor:pointer;
}

.ticker-analysis-button:hover{
  text-decoration: underline;
}

  .smart-score-punctuation-section--row .doughnut-component-container-number,
  .smart-score-punctuation-section--row .rounded-number,
  .smart-score-punctuation-section--row .hold-or-sell-section {
    -webkit-animation: none;
    -moz-animation: none;
    -ms-animation: none;
    -o-animation: none;
    animation: none;
  }
  
  .smart-score-punctuation-section--row .hold-or-sell-section {
    margin-left: 10px;
    }
  
@keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.ai-score-info-blue {
  color: var(--clr-accent);
}

.rounded-number {
  position: absolute;
  vertical-align: middle;
  padding-top: 4px;
  font-family: var(--ff-medium) !important;
}

.rounded-number.text-of-doughnut-with-text {
  font-family: var(--ff-bold) !important;
}

.tooltipCustomAiScore .tooltiptextCustomAiScore {
  font-family: var(--ff-primary);
  visibility: hidden;
  opacity: 0;
  width: 270px;
  background-color: #272727;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 77%;
  left: 0;
  margin-left: -80px;
  font-size: var(--fs-tooltip) !important;
  line-height: var(--lh-tooltip) !important;
}

.tooltipCustomAiScore .customClassTooltipAI{
  margin-left: -100px;
  bottom: 110%;
}

.tooltipCustomAiScore .customClassTooltipAITicker{
  margin-left: -100px;
  bottom: 142%;
}

.isCompare .tooltipCustomAiScore .tooltiptextCustomAiScore {
  margin-left: -77px;
}

.tooltipCustomAiScore .tooltiptextCustomAiScore.aiscoreBuyTooltip {
  bottom: 25%;
}

.tooltipCustomAiScore .tooltiptextCustomAiScore.aiscoreBuyTooltipTicker{
  bottom: 37%;
}

.tooltipCustomAiScore .tooltiptextCustomAiScore::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #272727 transparent transparent transparent;
}

.tooltipCustomAiScore:hover .tooltiptextCustomAiScore {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s linear;
}


.tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmall {
  font-family: var(--ff-primary);
  visibility: hidden;
  opacity: 0;
  width: 80px;
  background-color: #272727;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  left: -20%;
  margin-left: -17px;
  font-size: var(--fs-tooltip) !important;
  line-height: var(--lh-tooltip) !important;
}

.tooltipCustomAiScoreSmall .customClassTooltipOther{
  bottom:125% !important;
  left: -95px;
}

.tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmall::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #272727 transparent transparent transparent;
}

.tooltipCustomAiScoreSmall:hover .tooltiptextCustomAiScoreSmall {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s linear;
}


.tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmallTxt {
  font-family: var(--ff-primary);
  visibility: hidden;
  opacity: 0;
  width: 300px;
  background-color: #272727;
  color: #fff;
  text-align: center;
  border-radius: 4px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 110%;
  margin-left: 0px;
  white-space: normal;
  font-size: var(--fs-tooltip) !important;
  line-height: var(--lh-tooltip) !important;
}

.tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmallTxt::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #272727 transparent transparent transparent;
}

.tooltipCustomAiScoreSmall:hover .tooltiptextCustomAiScoreSmallTxt {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.15s linear;
  font-size: 13px !important;
  z-index: 3;
}

  .smart-score-punctuation-section--row .tooltiptextCustomAiScore{
    width: 270px;
    text-align: center;
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    left: 0;
    top: 51px;
    margin-left: -46px;
    display: block;
    min-height: calc(2em + 14px);
    white-space: normal;
  }
  
  .smart-score-punctuation-section--row span:last-child .tooltiptextCustomAiScore {
    margin-left: 0;
    margin-right: 0;
    left: 1%;
    min-height: calc(1em + 14px);
    width: 225px;
  }
  
  .smart-score-punctuation-section--row span:last-child .tooltiptextCustomAiScore::after {
    margin-left: 18px;
  }
  
    .smart-score-punctuation-section--row .tooltiptextCustomAiScore::after{
      top: -10px;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
    border-color: transparent transparent #272727 transparent;
  }
  
  @media (max-width: 1200px) {
  .smart-score-punctuation-section-big {
    height: 148px;
    width: 108px;
  }

  .smart-score-big-ticker{
    height: 161px;
  }

  .tooltipCustomAiScore .tooltiptextCustomAiScore {
    left: 0;
    margin-left: -82px !important;
  }
}

@media (max-width: 767px) {
  .smart-score-punctuation-container:not(.is-a-buy-styles) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 107px;
  }

  

  .smart-score-puntuations-small:not(.is-a-buy-styles .smart-score-puntuations-small) {
    padding: 17px 0 0 0;
    height: auto;
  }

  .smart-score-punctuation-section:not(.is-a-buy-styles .smart-score-punctuation-section) {
    padding-bottom: 10px;
  }

  .tooltipCustomAiScore .tooltiptextCustomAiScore {
    visibility: hidden;
    opacity: 0;
    width: 290px;
    background-color: #272727;
    color: #fff;
    text-align: center;
    font-family: var(--ff-primary);
    border-radius: 4px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 80%;
    left: -92%;
    font-size: var(--fs-tooltip) !important;
    line-height: var(--lh-tooltip) !important;
  }

  .tooltipCustomAiScore .customClassTooltipAI{
    left: -115px;
    bottom: 110%;
  }

  .tooltipCustomAiScore .tooltiptextCustomAiScore {
    bottom: 143%;
    left: -163%;
  }

  .tooltipCustomAiScore .customClassTooltipAIIsABuy{
    left: 8%;
    bottom: 143%;
  }

  .tooltipCustomAiScore .tooltiptextCustomAiScore::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 80%;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  .tooltipCustomAiScore .customClassTooltipAIIsABuy::after{
    left: 38%;
  }

  .tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmallTxt {
    width: 300px;
    bottom: 110%;
    left: -185%;
    margin-right: 230px;
  }

  

  .tooltipCustomAiScoreSmall .customClassTooltipOther{
    bottom: 116% !important;
    left: -183%;
  }

  .smart-score-puntuations-small .smart-score-punctuation-section:not(:first-child) .tooltiptextCustomAiScoreSmallTxt {
    z-index: 100000;
    bottom: 80%;
  }

  .tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmallTxt::after {
    left: 89%;
    margin-left: -5px;
  }

  .tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmallTxtIsABuy::after {
    left: 58%;
  }

}


`

export const isABuyPage = css`
/* is a buy page styles */
.is-a-buy-styles.smart-score-punctuation-container {
  border-radius: 8px; 
  padding: 15px 0 15px 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 170px;
}

.is-a-buy-styles .smart-score-punctuation-section-big {
  border: 0;
  height: 170px;
  width: 130px;
  padding: 10px 0 8px;
  border:1px solid var(--clr-border);
}

.is-a-buy-styles .smart-score-punctuation-section-big .doughnut-component-container-number {
  font-size: 29px;
}

.is-a-buy-styles .smart-score-puntuations-small {
  padding-top: 0;
  padding-bottom: 0;
  margin: 15px 0;
  height: 139px;
  position: relative;
  width: 100%;
}

.is-a-buy-styles .smart-score-puntuations-small .smart-score-punctuation-section:first-child {
  order: 2;
}

.is-a-buy-styles .smart-score-puntuations-small .smart-score-punctuation-section:nth-child(2) {
  order: 1;
}

.is-a-buy-styles .smart-score-puntuations-small .smart-score-punctuation-section:nth-child(3) {
  order: 3;
}

.is-a-buy-styles .smart-score-puntuations-small .smart-score-punctuation-section:nth-child(4) {
  order: 4;
}

@media (min-width: 1185px) {
  .is-a-buy-styles .tooltipCustomAiScore .tooltiptextCustomAiScore {
    margin-left: -66px !important;
  }
}

@media (min-width: 768px) and (max-width: 1184px ) {
  .is-a-buy-styles .tooltipCustomAiScore .tooltiptextCustomAiScore {
    margin-left: -60px !important;
  }
}


@media (max-width: 767px) {
  .is-a-buy-styles.smart-score-punctuation-container {
    height: auto;
    padding-bottom:16px;
  }

  .is-a-buy-styles .smart-score-puntuations-small,
  .is-a-buy-styles .smart-score-punctuation-section-big {
    width: 110px;
  }

  .is-a-buy-styles .smart-score-punctuation-section-big {
    height: 161px;
  }

  .is-a-buy-styles .smart-score-puntuations-small {
    padding-left: 22px;
  }

  .is-a-buy-styles .smart-score-puntuations-small .smart-score-punctuation-section span {
    font-size: 12px !important;
  }

  

  .is-a-buy-styles .smart-score-punctuation-section-big .doughnut-component-container-number {
    font-size: 29px !important;
  }

  
  .is-a-buy-styles .tooltipCustomAiScoreSmall .tooltiptextCustomAiScoreSmallTxt {
    left: unset;
  }

  .is-a-buy-styles .tooltipCustomAiScore .tooltiptextCustomAiScore {
    left: 52%;
    width: 100px;
  }
}

/* / is a buy page styles */
`

export const chartJs = css.global`

.smart-score-punctuation-section-big .chartjs-render-monitor {
  margin-top: 10px;
  margin-bottom: 26%;
}

.smart-score-punctuation-section
  .doughnut-component-container
  .chartjs-render-monitor,
.rounded-number {
  width: auto;
  max-width: 40px;
  height: auto;
  max-height: 40px;
}
`

export const compareDonuts = css.global`
.compare-page-seo-aiscore {
  -webkit-animation: fadeinAiScore 5s;
  -moz-animation: fadeinAiScore 5s;
  -ms-animation: fadeinAiScore 5s;
  -o-animation: fadeinAiScore 5s;
  animation: fadeinAiScore 5s;
}

@keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeinAiScore {
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .compare-stocks-page-body-container
  .smart-score-punctuation-container {
    align-items: center !important;
    justify-content: center;
  }

  .compare-stocks-page-body-container .smart-score-punctuation-container 
  .smart-score-puntuations-small .smart-score-punctuation-section span.rounded-description {
    font-size: 11px !important;
  }

  .compare-stocks-page-body-container .smart-score-punctuation-container 
  .smart-score-puntuations-small .doughnut-component-container img,
  .compare-stocks-page-body-container .smart-score-punctuation-container 
  .smart-score-puntuations-small .doughnut-component-container {
    width: 23px !important;
    height: 23px !important;
  }

  .compare-stocks-page-body-container .smart-score-punctuation-container 
  .smart-score-puntuations-small {
    height: 121px;
    margin: 14px 0 23px;
    padding: 0 !important;
  }
}
`
