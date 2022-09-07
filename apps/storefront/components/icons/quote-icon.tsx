const QuoteIcon = ({
    color = '#efefef',
    width = '24px',
    height = '18px',
    className = '',
  }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24.194 18"
        className={className}
      >
        <g data-name="Group 3264" transform="translate(0 0)">
          <g data-name="Group 3263">
            <path
              data-name="Path 3140"
              d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
              transform="translate(-204.029 -53.918)"
              fill={color}
            />
            <path
              data-name="Path 3141"
              d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
              transform="translate(0 -53.918)"
              fill={color}
            />
          </g>
        </g>
      </svg>
    );
  };
  
  export default QuoteIcon;
  