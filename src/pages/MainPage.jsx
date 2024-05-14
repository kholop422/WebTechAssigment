import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div style={containerStyle}>
      <div style={contentWrapper}>
        <h1 style={titleStyle}>Welcome to the Home Page</h1>
        <div style={buttonContainer}>
          <Link to="/form" style={linkStyle}>
            Go to Form Page
          </Link>
          <Link to="/search" style={linkStyle}>
            Go to Search Page
          </Link>
        </div>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: "#f8f9fa",
};

const contentWrapper = {
  maxWidth: "600px",
  width: "100%",
  padding: "40px",
  textAlign: "center",
};

const titleStyle = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "30px",
  color: "#007bff",
};

const buttonContainer = {
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "15px",
};

const linkStyle = {
  display: "block",
  padding: "15px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#007bff",
  borderRadius: "8px",
  textDecoration: "none",
  transition: "background-color 0.3s ease",
};

export default MainPage;




// import React from "react";
// import { Link } from "react-router-dom";

// const MainPage = () => {
//   const welcomeMessage = "Welcome! Upload your CV here";

//   return (
//     <div style={containerStyle}>
//       <div style={boxStyle}>
//         <h1 style={headerStyle}>Home Page</h1>

//         <div style={navBarStyle}>
//           <Link to="/form" style={linkStyle}>
//             Form Page
//           </Link>
//           <Link to="/search" style={linkStyle}>
//             Search Page
//           </Link>
//         </div>

//         <div style={welcomeContainerStyle}>
//           <p style={welcomeMessageStyle}>{welcomeMessage}</p>
//           <Link to="/form">
//             <button style={buttonStyle}>Upload CV</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const containerStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   minHeight: "100vh",
// };

// const boxSize = 300; // Adjust the size of the square box
// const boxStyle = {
//   width: `${boxSize}px`,
//   padding: "30px",
//   border: "2px solid #007bff",
//   borderRadius: "12px",
//   backgroundColor: "#f0f0f0",
//   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   textAlign: "center",
// };

// const headerStyle = {
//   fontSize: "2rem",
//   marginBottom: "20px",
//   color: "#007bff",
// };

// const navBarStyle = {
//   marginBottom: "20px",
// };

// const linkStyle = {
//   marginRight: "20px",
//   textDecoration: "none",
//   color: "#007bff",
//   fontSize: "1.2rem",
//   fontWeight: "bold",
// };

// const welcomeContainerStyle = {
//   marginBottom: "20px",
// };

// const welcomeMessageStyle = {
//   fontSize: "1.2rem",
//   marginBottom: "20px",
// };

// const buttonStyle = {
//   padding: "12px 24px",
//   fontSize: "1rem",
//   backgroundColor: "#007bff",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   transition: "background-color 0.3s ease",
// };

// export default MainPage;

