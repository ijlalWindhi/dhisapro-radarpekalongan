"use client";

import { useEffect, useState } from "react";
import Body from "../Body";
import supabase from "@/app/config/supabaseConfig";

export default function PageKajen() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select()
      .eq("Kategori", "Kajen");
    setData(data);
  }
  return (
    <>
      <Body title="Kajen" data={data} />
    </>
  );
}
