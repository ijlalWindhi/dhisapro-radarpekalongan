"use client";
import supabase from "@/app/config/supabaseConfig";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ContentLoader from "../../components/ContentLoader";
import Image from "next/image";

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
        <div className="flex flex-col md:items-center ">
          <h1 className="my-10 font-bold text-3xl sm:text-xl text-center">
            {dataBerita.Judul}
          </h1>
          <Image
            quality={50}
            width={500}
            height={500}
            src={dataBerita.ImageURL}
            alt=""
            className="md:w-1/3 h-fit rounded-lg mb-10"
          />
          <div className="md:mx-auto md:w-1/2 sm:px-6 text-lg">
            {" "}
            {sentences?.map((sentence, index) => (
              <p key={index} className="my-6">
                {sentence.trim()}.
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
