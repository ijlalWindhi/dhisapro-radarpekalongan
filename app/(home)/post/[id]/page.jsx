"use client";
import supabase from "@/app/config/supabaseConfig";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContentLoader from "../../_components/ContentLoader";
import Image from "next/image";
import CatatanDisway from "../../_components/CatatanDisway";
import Terpopuler from "../../_components/Terpopuler";
import Link from "next/link";
import Terkini from "../../_components/Terkini";

export default function PagePost() {
  const [dataBerita, setDataBerita] = useState(null);
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data } = await supabase
      .from("data-berita")
      .select()
      .range(0, 5)
      .order("id", { ascending: false });
    setData(data);
  }

  console.log(data);

  useEffect(() => {
    const fetchBerita = async () => {
      const { data, error } = await supabase
        .from("data-berita")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        // navigate("/", { replace: true });
        console.log(error);
      }
      if (data) {
        console.log(data);
        setDataBerita(data);
      }
    };

    fetchBerita();
  }, [id]);

  const paragraf = dataBerita?.Isi_Berita;

  return (
    <>
      {!dataBerita && <ContentLoader />}
      {dataBerita && (
        <div className="container md:mx-auto">
          <div className="flex p-5 sm:flex-col">
            <div className="flex flex-col md:items-center md:mx-10 ">
              <h1 className="mt-10 mb-5 font-bold text-3xl sm:text-xl text-center">
                {dataBerita.Judul}
              </h1>
              <center>Penulis: {dataBerita.author}</center>
              <div className="mt-5"></div>
              <Image
                quality={50}
                width={500}
                height={500}
                src={dataBerita.ImageURL}
                alt=""
                className="w-full h-fit rounded-lg mb-10"
              />
              <div className="sm:px-6 text-lg">
                {/* {" "}
            {sentences?.map((sentence, index) => (
              <p key={index} className="my-6">
                {sentence.trim()}.
              </p>
            ))} */}
                Tags:
                {dataBerita.tags?.split(",").length > 0 &&
                  dataBerita.tags.split(",").map((val, i) => (
                    <span
                      key={i}
                      style={{
                        background: "blue",
                        color: "white",
                        padding: "1px 10px",
                        borderRadius: "2px",
                        marginRight: "2px",
                      }}
                    >
                      <small style={{ fontStyle: "italic" }}>#{val}</small>
                    </span>
                  ))}
                <div
                  style={{ marginTop: "10px" }}
                  dangerouslySetInnerHTML={{ __html: paragraf }}
                ></div>
              </div>
            </div>
            <div className="w-full">
              <Terkini data={data} />
              <Terpopuler data={data} />
              <Terkini data={data} title="PILIHAN" />
            </div>
          </div>
          <div className="h-full ">
            <h1 className="text-lg font-bold">Berita Terkini</h1>
            {data?.slice(0, 5).map((data) => (
              <div className="flex p-4 sm:py-4" key={data.id}>
                <Image
                  quality={30}
                  width={150}
                  height={150}
                  src={data.ImageURL ? data.ImageURL : ""}
                  alt=""
                  className="min-w-40 sm:min-w-28 pr-4 "
                />
                <div className="flex-col min-w-40 sm:min-w-28 h-fit">
                  <Link aria-label="link to different page" href={`/post/${data.id}`} className="font-semibold ">
                    {data.Judul}
                  </Link>
                  <span className="flex items-center">
                    <p className="sm:text-xs text-white uppercase font-bold bg-red-500 w-fit p-2 rounded-lg">
                      {data.Kategori}
                    </p>
                    <p className="font-bold text-sm">
                      {data.created_at.substring(0, 10)}
                    </p>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
