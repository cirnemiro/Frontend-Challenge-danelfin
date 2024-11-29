import css from "styled-jsx/css";

export default css`
.table-container {
    position: relative;
}

.table-header {
    background-color: var(--clr-newDarkgrey);
    min-height: 44px;
    color: var(--clr-light);
    font-size: 12px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.table-body {
    border-right: 1px solid var(--clr-border);
    border-left: 1px solid var(--clr-border);
    background-color: var(--clr-light);
}

.table-row {
    border-bottom: 1px solid var(--clr-border);
    min-height: 62px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
}

.table-data {
    width: 100%;
    height: 100%;
    text-align: center;
    min-height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-header .table-data {
    min-height: 48px;
}


.no-data-text {
    display: flex;
    justify-content: center;
    min-height: 100px;
    align-items: center;
}

@media (max-width: 1024px) {
    .table-header {
        font-size: 12px;
        line-height: 14px;
    }

    .table-header,
    .table-header .table-data {
        min-height: 48px;
    }

    .table-body {
        border-right: 0;
        border-left: 0;
    }

    .table-row {
        border-bottom: 1px solid var(--clr-border);
    }

    .table-row,
    .table-row .table-data {
        min-height: 66px;
    }

    .no-data-text {
        border-radius: 0;
        border-right: 0;
        border-left: 0;
    }
}
`