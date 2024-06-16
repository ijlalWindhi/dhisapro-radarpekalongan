"use client";
import supabase from "@/app/config/supabaseConfig";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function PagePost() {
  const [dataBerita, setDataBerita] = useState({});
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

  const paragraf = dataBerita.Isi_Berita;

  const sentences = paragraf
    ?.split(".")
    ?.filter((sentence) => sentence.trim() !== "");

  return (
    <div className=" flex flex-col items-center ">
      <h1 className="my-10 font-bold text-3xl">{dataBerita.Judul}</h1>
      <img
        src={dataBerita.ImageURL}
        alt=""
        className="w-1/3 h-fit rounded-lg mb-10"
      />
      <div className="mx-20 w-1/2 text-lg">
        {" "}
        {sentences?.map((sentence, index) => (
          <p key={index} className="my-6">
            {sentence.trim()}.
          </p>
        ))}
      </div>
    </div>
  );
}
