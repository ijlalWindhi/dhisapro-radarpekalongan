import { METADATA } from "@/constants/metadata";
import supabase from "@/app/config/supabaseConfig";
import Body from "./Body";

export const metadata = {
  title: "Home | " + METADATA.title,
  description: METADATA.description,
  alternates: {
    canonical: METADATA.url,
  },
};

export const revalidate = 60; // seconds

export default async function Home() {
  const { data } = await supabase
    .from("data-berita")
    .select()
    .range(0, 24)
    .order("id", { ascending: false });

  return <Body data={data} title="Berita Terkini" />;
}
