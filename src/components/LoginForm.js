import React, { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address.");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="login-form">
      <input
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        data-testid="email-input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        data-testid="password-input"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
