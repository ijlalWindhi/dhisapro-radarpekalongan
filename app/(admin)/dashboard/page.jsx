"use client";

import { useEffect, useState } from "react";
import SidebarDashboard from "./_components/SidebarDashboard";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkToken = localStorage.getItem(
      "sb-zdgnipjmpjiqktbpdvjj-auth-token"
    );

    const tokenJson = JSON.parse(checkToken);

    if (checkToken) {
      setUser(tokenJson.user.email);
      router.push("/dashboard");
    }

    if (!checkToken) {
      router.push("/login");
    }
  }, [user]);
  return (
    <>
      <div className="h-screen w-full bg-slate-100 flex">
        <SidebarDashboard />
        <div className="h-auto flex items-center justify-center w-5/6 ">
          <h1 className="font-bold text-xl text-slate-400 grid justify-self-center">
            Selamat datang {user} di halaman dashboard website Radar Pekalongan
          </h1>
        </div>
      </div>
    </>
  );
}
