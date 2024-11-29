import css from "styled-jsx/css";

export default css`
    .home-tables-wrapper {
        margin-top: 32.49px;
    }

    .compare-page{
        max-width:1000px;
        width:100%;
        margin-top:0px;
    }

    .title {
        color: var(--clr-txt);
        font-family: var(--ff-graphicBold);
        font-size: 22px;
        line-height: 24px;
        text-align:center;
        margin-bottom:0px;
    }

    .description{
        margin-top:10px;
        color: var(--clr-txt);
        font-family: var(--ff-primary);
        font-size: 14px;
        line-height: 24px;
        max-width: 992px;
        text-align:center;
        margin-bottom:24px;
    }

    .description-percentage{
        font-family: var(--ff-bold);
    }

    .home-tables-wrapper ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .home-tables-wrapper ul li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        max-width: 20%;
        border-top: 1px solid var(--clr-border);
        border-left: 1px solid var(--clr-border);
        height: 49px;
        cursor: pointer;
        font-family: var(--ff-medium);
        border-bottom: 1px solid var(--clr-border);
        position: relative;
    }

    .home-tables-wrapper ul li img.etf-new-icon {
        position: absolute;
        top: -8px;
        right: 18px;
        margin-right: 0;
    }

    .compare-page ul li:not(.active){
        background-color: var(--clr-background);
    }

    .home-tables-wrapper ul li:last-child {
        border-right: 1px solid var(--clr-border);
        border-radius: 0 8px 0 0;
    }

    .home-tables-wrapper ul li:first-child {
        border-radius: 8px 0 0 0;
    }

    .home-tables-wrapper ul li.active {
        border-bottom: 1px solid var(--clr-light);
    }

    .home-tables-wrapper ul li.active,
    .home-tables-wrapper ul li:hover {
        background-color: var(--clr-light);
        color: var(--clr-accent);
    }

    .home-tables-wrapper ul li a {
        text-decoration: none;
        color: var(--clr-txt);
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .home-tables-wrapper ul li img {
        margin-right: 8px;
    }

    .home-tables-wrapper ul li div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .home-tables-wrapper ul li div span {
        display: flex;
        align-items: center;
        position: relative;
        height: 100%;

    }

    .home-tables-wrapper ul li.active div span::after {
        content: "";
        border-bottom: 3px solid var(--clr-accent);
        height: 3px;
        padding: 0 5px;
        position: absolute;
        bottom: 0;
        width: calc(100% + 6px);
        left: -3px;
    }

    .home-tables-title {
        padding: 24px 30px;
        background-color: var(--clr-light);
        border-right: 1px solid var(--clr-border);
        border-left: 1px solid var(--clr-border);
    }

    .home-tables-title h3, .home-tables-title h2 {
        font-size: 22px;
        font-family: var(--ff-graphicBold);
        line-height: 30px;
    }

    .home-tables-title p {
        margin: 12px 0 0 0;
        line-height: 24px;
    }

    .home-tables-footer {
        padding: 22px 0 23px;
        background-color: var(--clr-light);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 8px 8px;
        border-right: 1px solid var(--clr-border);
        border-bottom: 1px solid var(--clr-border);
        border-left: 1px solid var(--clr-border);
        font-family: var(--ff-bold);
        color: var(--clr-links);
        font-size: 15px;
    }

    .home-tables-footer a:not(a:hover) {
        text-decoration: none;
    }

    .home-tables-footer img {
        transform: rotate(270deg);
        margin-left: 7px;
    }

    @media (max-width: 770px) { 
        .home-tables-title {
            padding: 20px 12px;
        }
        
        .home-tables-title h3 {
            font-size: 18px;
            line-height: 28px;
        }

        .home-tables-title p {
            margin: 10px 0 0 0;
        }

        .home-tables-wrapper ul li div span,
        .home-tables-wrapper ul li a span {
            display: flex;
            flex-direction: column; 
            justify-content: center;
            align-items: center;
        }

        .home-tables-wrapper ul li {
            width: 20%;
            font-size: 11px;
        }

        .home-tables-wrapper ul li:first-child,
        .home-tables-wrapper ul li:last-child,
        .home-tables-footer {
            border-radius: 0;
        }

        .home-tables-wrapper ul li:first-child,
        .home-tables-title,
        .home-tables-footer {
            border-left: 0;
        }

        .home-tables-wrapper ul li:last-child,
        .home-tables-title,
        .home-tables-footer {
            border-right: 0;
        }

        .home-tables-wrapper ul li img {
            margin-right: 0;
        }

        .home-tables-wrapper ul li img.etf-new-icon {
            top: -6px;
            right: 3px;
            width: 26px;
            height: 12px;
        }

        .title{
            font-size: 20px;
            line-height: 30px;
            margin: 0 12px 10px;
        } 
        .description{
            font-size: 14px;
            line-height: 24px;
            margin: 0 12px;
            margin-bottom:21px;
        }
    }
`