
  export const Spinner = ({ size = 24, className, ...props }) => {
    let finalClassName = "";
    if (className === "middle") {
      finalClassName = "absolute top-0 left-0 right-0 bottom-0 m-auto";
    }
  

  
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        {...props}
        viewBox="0 0 24 24"
        className={`spinner_OSmW ${className} ${finalClassName}`}
      >
        <style>
          {`.spinner_OSmW{transform-origin:center;animation:spinner_T6mA .75s step-end infinite}@keyframes spinner_T6mA{8.3%{transform:rotate(30deg)}16.6%{transform:rotate(60deg)}25%{transform:rotate(90deg)}33.3%{transform:rotate(120deg)}41.6%{transform:rotate(150deg)}50%{transform:rotate(180deg)}58.3%{transform:rotate(210deg)}66.6%{transform:rotate(240deg)}75%{transform:rotate(270deg)}83.3%{transform:rotate(300deg)}91.6%{transform:rotate(330deg)}100%{transform:rotate(360deg)}`}
        </style>
        <g fill="var(--spinner-color)">
          <rect x="11" y="1" width="2" height="5" opacity=".14" />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(30 12 12)"
            opacity=".29"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(60 12 12)"
            opacity=".43"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(90 12 12)"
            opacity=".57"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(120 12 12)"
            opacity=".71"
          />
          <rect
            x="11"
            y="1"
            width="2"
            height="5"
            transform="rotate(150 12 12)"
            opacity=".86"
          />
          <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
        </g>
      </svg>
    );
  };
  