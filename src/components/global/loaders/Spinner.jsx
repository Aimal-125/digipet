const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="spinner"></div>
      <style>
        {`
            .spinner {
              border: 4px solid rgba(0, 0, 255, 0.5);
              width: 50px;
              height: 50px;
              border-radius: 50%;
              border-left-color: blue;
              animation: spin 1s ease infinite;
            }
  
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}
      </style>
    </div>
  );
};

export default Spinner;
