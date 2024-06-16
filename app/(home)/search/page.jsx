"use client";

import supabase from "@/app/config/supabaseConfig";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Body from "../Body";

export default function page() {
  const searchParams = useSearchParams();

  const newParams = searchParams.get("search");

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [newParams]);

  async function getData() {
    const { data, error } = await supabase
      .from("data-berita")
      .select()
      .textSearch("Judul", newParams);
    if (data) {
      setData(data);
    }
    if (error) {
      console.log(error);
    }
  }

  return (
    <Suspense>
      <Body title={`Kata Pencarian '${newParams}'`} data={data} />;
    </Suspense>
  );
}
