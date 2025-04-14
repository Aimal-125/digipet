import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* <h1 style={styles.errorCode}>404</h1> */}
        <div className="mb-[40px]">
          <img
            src={"./images/bulb.gif"}
            alt="404 not found"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </div>
        <p style={styles.message}>
          Oops! The page you're looking for could not be found.
        </p>
        <Link to="/" style={styles.homeLink}>
          Go back to the homepage
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "black", // Light background
    padding: "20px",
  },
  content: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#fff", // White content area
    borderRadius: "20px",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  },
  errorCode: {
    fontSize: "80px",
    fontWeight: "bold",
    color: "#333", // Dark, prominent error code
    marginBottom: "10px",
  },
  message: {
    fontSize: "20px",
    color: "#555", // Slightly lighter text for the message
    marginBottom: "30px",
  },
  homeLink: {
    display: "inline-block",
    padding: "12px 24px",
    backgroundColor: "#007bff", // Primary color for the button
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#0056b3", // Darker shade on hover
    },
  },
};

export default NotFoundPage;
