
import css from 'styled-jsx/css'

export default css`
    .placeholder-item {
        background-color: rgb(238, 238, 238);
        position: relative;
        overflow: hidden;
        margin-bottom: 5px;
        margin-top: 5px;
    }

    .placeholder-item::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 0%, #f5f5f5 20%, transparent 100%);
        animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }

    @keyframes load {
        from {
            left: -150px;
        }
        to   {
            left: 100%;
        }
    }
`