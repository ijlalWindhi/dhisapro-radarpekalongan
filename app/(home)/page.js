"use client";
import { Suspense, useEffect, useState } from "react";
import Body from "./Body";
import supabase from "../config/supabaseConfig";

export default function Home() {
  const [dataBerita, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let isMounted = true; // Flag to track if the component is mounted
    const { data } = await supabase
      .from("data-berita")
      .select()
      .order("id", { ascending: false });
    if (isMounted && !error) {
      // Check if the component is still mounted
      setData(data);
    }
  }

  return (
    <>
      <Body data={dataBerita} />
    </>
  );
}
