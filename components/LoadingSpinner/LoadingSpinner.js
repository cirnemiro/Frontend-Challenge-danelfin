import {memo} from "react";

const LoadingSpinner = ({color}) => {
  return (
    <div>
        <div className="loading-spinner-container">
            <div className={`spinner-border text-${color ? color : 'light'}`} role="status">
            </div>
        </div>
        <style jsx>{`
            .loading-spinner-container {
                position: fixed;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                height: 100vh;
                width: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                z-index: 99999;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        `}</style>
    </div>
  )
}

export default memo(LoadingSpinner);
