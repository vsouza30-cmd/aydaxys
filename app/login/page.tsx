"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login realizado com sucesso!");
    console.log(data);
  }

  async function handleRegister() {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Conta criada!");
    console.log(data);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div style={{ marginTop: 10 }}>
        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleRegister} style={{ marginLeft: 10 }}>
          Criar conta
        </button>
      </div>
    </div>
  );
}