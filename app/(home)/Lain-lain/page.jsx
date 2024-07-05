"use client";

import { useEffect, useState } from "react";
import supabase from "@/app/config/supabaseConfig";
import BodyCategory from "../_components/BodyCategory";

const pageSize = 20; // Number of items per page

export default function PagePekalongan() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
  }, [page]);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select("*", { count: "exact" })
      .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
      .eq("Kategori", "Lain-lain")
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
      <BodyCategory
        title="Lain-lain"
        data={data}
        total={totalPages}
        current={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
