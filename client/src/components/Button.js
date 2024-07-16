import React from "react";

function Button({ title, onClick, variant, disabled, fullWidth, type }) {
  let className = "login-submit p-1 text-white";

  if (fullWidth) {
    className += " w-full";
  }
  if (variant === "outlined") {
    className = className.replace(
      "login-submit-o",
      "border border-primary text-primary login-submit-o"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default Button;
