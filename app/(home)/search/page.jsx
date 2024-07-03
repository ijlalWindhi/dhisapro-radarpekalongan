"use client";

import supabase from "@/app/config/supabaseConfig";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Body from "../Body";

const ITEMS_PER_PAGE = 6; // Number of items per page

export default function page() {
  const searchParams = useSearchParams();

  const newParams = searchParams.get("search");

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [newParams]);

  async function getData() {
    const from = (page - 1) * ITEMS_PER_PAGE;
    const to = page * ITEMS_PER_PAGE - 1;
    const { data, error } = await supabase
      .from("data-berita")
      .select()
      .range(from, to)
      .textSearch("Judul", newParams)
      .order("id", { ascending: false });
    if (data) {
      setData(data);
    }
    if (error) {
      console.log(error);
    }
  }
  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <Suspense>
      <Body
        title={`Kata Pencarian '${newParams}'`}
        data={data}
        setPage={setPage}
        page={page}
        getData={getData}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
      ;
    </Suspense>
  );
}
