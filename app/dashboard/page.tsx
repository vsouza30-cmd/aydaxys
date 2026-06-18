"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkUser() {
      const { data, error } = await supabase.auth.getUser();

      if (error || !data.user) {
        router.push("/login");
        return;
      }

      setUser(data.user);
      setLoading(false);
    }

    checkUser();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (loading) {
    return (
      <div style={{ padding: 20 }}>
        <p>Carregando dashboard...</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>

      <p>Bem-vindo 👋</p>

      <div style={{ marginTop: 10 }}>
        <strong>Email:</strong> {user?.email}
      </div>

      <div style={{ marginTop: 20 }}>
        <button onClick={handleLogout}>
          Sair
        </button>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <h3>Seus próximos dados:</h3>
        <p>Aqui você vai listar seus diagnósticos depois</p>
      </div>
    </div>
  );
}