import css from "styled-jsx/css";

export default css`
    .page-not-found-container{
        background: #fff;
    }

    .page-not-found-content{
        display:flex;
        padding-top:94px;
        padding-bottom: 266px;
        justify-content:center;
    }

    .robot_404{
        height:374px;
        width:312px;
        margin-right: 25px;
    }

    .desc_404{
        display:flex;
        flex-direction:column;
    }

    .opps_text{
        margin-top:45px;
        margin-bottom:28px;
        font-family: var(--ff-graphicSemibold);
        font-size:64px;
        color:var(--clr-accent);
    }

    .text_nf{
        margin-bottom:26px;
        line-height:28px;
        font-family: var(--ff-bold);
        font-size:20px;
    }

    .search_others{
        margin-bottom:20px;
        font-size:16px;
        line-height:26px;
        width:388px;
        font-family: var(--ff-medium);
    }

    .bottom_links{
        font-size:16px;
        line-height:22px;
        color:var(--clr-links);
        font-family: var(--ff-medium);
    }

    .bottom_links:not(:last-child){
        margin-right:30px;
    }

    @media (max-width: 770px) {
        .page-not-found-content{
            padding-top:13px;
            display:flex;
            flex-direction:column;
            align-items:center;
            padding-bottom: 170px;
        }

        .robot_404{
            height: 175.01px;
            width: 146px;
        }

        .desc_404{
            padding-left: 16px;
        }

        .opps_text{
            margin:0;
            font-size:48px;
        }
        
        .text_nf{
            margin: 6px 0 8px 0;
            font-size: 18px;
            line-height:26px;
        }

        .search_others{
            margin-bottom:16px;
            line-height:24px;
            width:343px;
            font-size:14px;
            line-height:22px;
            padding-right: 14px;
        }

        .others_options{
            display:flex;
            flex-wrap:wrap;
        }

        .others_options {
            display: flex;
            flex-wrap: wrap;
        }

        .bottom_links {
            margin: 0 30px 14px 0;
            font-size:14px;
        }
    }
`