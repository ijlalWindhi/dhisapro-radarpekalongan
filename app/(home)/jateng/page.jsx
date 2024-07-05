"use client";

import { useEffect, useState } from "react";
import Body from "../Body";
import supabase from "@/app/config/supabaseConfig";

const pageSize = 20; // Number of items per page

export default function PagePekalongan() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    getData();
  }, [currentPage]);

  async function getData() {
    const { data, count } = await supabase
      .from("data-berita")
      .select("*", { count: "exact" })
      .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
      .eq("Kategori", "Jateng")
      .order("id", { ascending: false });
    setData(data || []);
    setTotalPages(Math.ceil(count / pageSize));
  }

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    console.log("test");
    setCurrentPage(page);
  };
  return (
    <>
      <Body
        title="Jateng"
        data={data}
        setPage={setPage}
        page={page}
        getData={getData}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </>
  );
}
