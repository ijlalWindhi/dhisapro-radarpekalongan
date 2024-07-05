"use client";

import supabase from "@/app/config/supabaseConfig";
import SidebarDashboard from "../_components/SidebarDashboard";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Link from "next/link";
import Pagination from "@/app/(home)/_components/Pagination";

// const ITEMS_PER_PAGE = 6; // Number of items per page

export default function ListKonten() {
  const [news, setNews] = useState([]);
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 10; // Number of items per page

  const fetchData = async (kategori = "") => {
    setLoading(true);
    if (kategori == "") {
      const { data, count } = await supabase
        .from("data-berita")
        .select("*", { count: "exact" })
        .range((currentPage - 1) * pageSize, currentPage * pageSize - 1)
        .order("id", { ascending: false });
      setNews(data || []);
      setTotalPages(Math.ceil(count / pageSize));
    } else {
      const { data, count } = await supabase
        .from("data-berita")
        .select("*", { count: "exact" })
        .eq("Kategori", kategori)
        .range((currentPage - 1) * pageSize, currentPage * pageSize - 1);
      setNews(data || []);
      setTotalPages(Math.ceil(count / pageSize));
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      // Save it!
      const { data, error } = await supabase
        .from("data-berita")
        .delete()
        .eq("id", id)
        .select();

      if (error) {
        console.log(error);
      }
      if (data) {
        alert("Success deleting data");
        console.log(data);
        window.location.reload();
      }
      console.log("Thing was saved to the database.");
    } else {
      // Do nothing!
      console.log("Thing was not saved to the database.");
    }
  };

  // const handleNext = (pageNum) => {
  //   if (pageNum <= totalPages) {
  //     setPage(pageNum);
  //   }
  // };

  // const handlePrevious = () => {
  //   if (page > 1) {
  //     setPage(page - 1);
  //   }
  // };
  return (
    <>
      <div className="h-screen w-full bg-slate-100 flex">
        <SidebarDashboard />
        <div className="w-5/6 h-fit p-10">
          <div className="w-1/4 mb-5">
            <label>Kategori</label>
            <select
              id="kategori"
              className="bg-gray-50 mt-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => fetchData(e.target.value)}
            >
              <option value="">Semua</option>
              <option value="Pekalongan">Pekalongan</option>
              <option value="Kecantikan">Kecantikan</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Otomotif">Otomotif</option>
              <option value="Kajen">Kajen</option>
              <option value="Batang">Batang</option>
              <option value="Kendal">Kendal</option>
              <option value="Bisnis">Bisnis</option>
              <option value="Pendidikan">Pendidikan</option>
              <option value="Nasional">Nasional</option>
              <option value="Nasional">Jateng</option>
              <option value="Lain-Lain">Lain-lain</option>
            </select>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Judul Berita
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Kategori
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Edit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hapus
                  </th>
                </tr>
              </thead>
              <tbody>
                {news.map((data, index) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={data.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4 text-lg ">{data.Judul}</td>
                    <td className="px-6 py-4 text-lg ">{data.Kategori}</td>
                    <Link href={`/dashboard/edit/${data.id}`}>
                      <td className="px-6 py-4">
                        <AiFillEdit className="h-8 w-8 text-blue-500" />
                      </td>
                    </Link>
                    <td
                      className="px-6 py-4"
                      onClick={() => handleDelete(data.id)}
                    >
                      <AiFillDelete className="h-8 w-8 text-red-500 hover:cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            total={totalPages}
            current={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
}
