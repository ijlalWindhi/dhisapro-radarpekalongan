"use client";
import supabase from "@/app/config/supabaseConfig";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContentLoader from "../../components/ContentLoader";
import Image from "next/image";
import CatatanDisway from "../../components/CatatanDisway";
import Terpopuler from "../../components/Terpopuler";

export default function PagePost() {
  const [dataBerita, setDataBerita] = useState(null);
  const { id } = useParams();

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

  const sentences = paragraf
    ?.split(".")
    ?.filter((sentence) => sentence.trim() !== "");

  return (
    <>
      {!dataBerita && <ContentLoader />}
      {dataBerita && (
        <div className="container md:mx-auto">
          <div className="flex p-5 sm:flex-col">
            <div className="flex flex-col md:items-center ">
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
                className="md:w-1/3 h-fit rounded-lg mb-10"
              />
              <div className="md:mx-auto md:w-1/2 sm:px-6 text-lg">
                {/* {" "}
            {sentences?.map((sentence, index) => (
              <p key={index} className="my-6">
                {sentence.trim()}.
              </p>
            ))} */}
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
            <div className="w-1/3">
              <Terpopuler />
              <CatatanDisway />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
