"use client";

import { useEffect, useState } from "react";
import Body from "../Body";
import supabase from "@/app/config/supabaseConfig";

export default function PagePekalongan() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select()
      .eq("Kategori", "Otomotif");
    setData(data);
  }
  return (
    <>
      <Body title="Otomotif" data={data} />
    </>
  );
}
