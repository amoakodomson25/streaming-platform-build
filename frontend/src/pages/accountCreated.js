import { useEffect } from "react";

const AccountCreated = () => {
  useEffect(() => {
    localStorage.clear();

    const preventBack = () => {
      window.history.pushState(null, "", window.location.href);
    };

    preventBack();

    window.addEventListener("popstate", preventBack);

    const timer = setTimeout(() => {
      window.removeEventListener("popstate", preventBack);
      window.location.replace("/home"); // hard redirect, clears React Router stack too
    }, 3000);

    return () => {
      window.removeEventListener("popstate", preventBack);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className="account_created"
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "#fff",
        animation: "fadeIn 0.8s ease-in-out",
      }}
    >
      <div
        style={{
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          maxWidth: "400px",
        }}
      >
        <div style={{ fontSize: "4rem", marginBottom: "10px" }}>🎉</div>
        <h1 style={{ marginBottom: "10px" }}>Account Created!</h1>
        <p style={{ marginBottom: "20px", fontSize: "1.1rem" }}>
          Your account has been successfully created.
        </p>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default AccountCreated;
