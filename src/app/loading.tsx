import { css } from "../../styled-system/css";

const loader = css({
    position: "absolute",
    cursor: "none",
    top: "calc(50% - 50px)",
    left: "calc(50% - 50px)",
    width: "100px",
    height: "100px",
});

const circle = css({
    position: "absolute",
    cursor: "none",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    boxSizing: "border-box",
    opacity: 0.9,
    borderTop: "1px solid #EB4127",
    animation: "rotateRight 1s linear infinite",
});

const loading = () => {
    return (
        <>
            <div className={loader}>
                <div className={circle}></div>
            </div>
        </>
    );
};

export default loading;
