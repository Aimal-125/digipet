import { useRouteError, useNavigate } from "react-router";

export default function ErrorBoundary() {
  let error = useRouteError();

  console.error(error);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f4f4f4",
      }}
    >
      <h1 style={{ color: "#e74c3c", marginBottom: "10px" }}>
        Oops! Something went wrong.
      </h1>
      <p style={{ marginBottom: "20px", color: "#333" }}>
        We've encountered an unexpected issue on this page.
      </p>
      <button
        onClick={handleGoBack}
        style={{
          padding: "10px 20px",
          backgroundColor: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Go Back
      </button>
      {/* Conditionally render error details in development */}
      {import.meta.env.VITE_REACT_ENV === "development" && error && (
        <details
          style={{
            marginTop: "20px",
            textAlign: "left",
            border: "1px solid #ccc",
            padding: "20px",
            backgroundColor: "#eee",
            borderRadius: "20px",
            width: "100%",
            overflow: "auto",
          }}
        >
          <summary style={{ fontWeight: "bold" }}>Error Details</summary>

          <pre style={{ whiteSpace: "pre-wrap" }}>
            {error.message ? `Message: ${error.message}\n` : ""}
            {error.stack
              ? `Stack: ${error.stack}`
              : JSON.stringify(error, null, 2)}
          </pre>
        </details>
      )}
    </div>
  );
}
