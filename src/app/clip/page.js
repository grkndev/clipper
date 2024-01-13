"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/navbar";
import Download from "./component/download";
import Detail from "./component/detail";
import Trend from "@/components/trend/trend";
import Twitcher from "twitcher";
import { useRouter, useSearchParams } from "next/navigation";
const twitch = new Twitcher({
  client_id: process.env.NEXT_PUBLIC_TWID,
  token: process.env.NEXT_PUBLIC_TWCLIENT,
  client_secret: process.env.NEXT_PUBLIC_PASS,
});
export default function Clip() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const clipUrl = searchParams.get("clipUrl");
  if (!clipUrl || clipUrl.length < 24) return router.push("/");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [gamedata, setGameData] = useState(null);
  useEffect(() => {
    getClip();
  }, []);
  async function getClip() {
    if (!clipUrl.includes("https://clips.twitch.tv/") && clipUrl.length < 28) {
      setData(null);
      setLoading(false);
      setError(true);
      return;
    }
    if (!clipUrl.includes("https://www.twitch.tv/") && clipUrl.length < 26) {
      setData(null);
      setLoading(false);
      setError(true);
      return;
    }
    const twdata = await twitch.getClip(clipUrl);

    console.log(twdata);

    if (!twdata.success || twdata.error) {
      setData(null);
      setLoading(false);
      setError(twdata.error);
      return;
    }
    const gameData = await twitch.getGameById(twdata.clip.game_id);
    setData(twdata);
    setGameData(gameData);
    setLoading(false);
  }
  return (
    <>
      <Navbar />
      {loading && !data ? (
        <div className="justify-center items-center flex">
          <h1 className="font-bold text-4xl">Loading...</h1>
        </div>
      ) : error ? (
        <>Error: {error}</>
      ) : (
        <>
          <Download clipData={data.clip} />
          <Detail clipData={data} gameData={gamedata} />
        </>
      )}

      {/* <Trend /> */}
    </>
  );
}
