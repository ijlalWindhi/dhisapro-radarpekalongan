"use client";

import supabase from "@/app/config/supabaseConfig";
import SidebarDashboard from "../components/SidebarDashboard";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Link from "next/link";

export default function ListKonten() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase.from("data-berita").select();
    setNews(data);
  }

  const handleDelete = async (id) => {
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
  };
  return (
    <>
      <div className="h-screen w-full bg-slate-100 flex">
        <SidebarDashboard />
        <div className="w-5/6 h-fit p-10">
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
        </div>
      </div>
    </>
  );
}
