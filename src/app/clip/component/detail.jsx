import moment from "moment";
import Image from "next/image";

export default function Detail({ clipData, gameData }) {
  return (
    <>
      <div>
        <div className="bg-white mt-2 rounded-xl py-3 flex items-center px-3 pr-6  shadow-xl">
          <div className="w-full">
            <h1 className="text-2xl font-extrabold ">{clipData.clip.title}</h1>
            <div className="flex justify-between mt-4 w-full items-center ">
              <div className="flex items-center  gap-5">
                <div>
                  <img
                    className="w-14 rounded-xl h-14"
                    src={clipData.streamer.profile_image_url}
                  ></img>
                </div>
                <div>
                  <h1 className="font-bold">
                    {clipData.streamer.display_name}
                  </h1>
                  <h4 className="text-sm">{clipData.streamer.description}</h4>
                </div>
              </div>
              <div>
                <h4 className="text-sm">
                  <b>{String(clipData.streamer.display_name).toUpperCase()}</b>{" "}
                  PLAYING <b>{String(gameData.data[0].name).toUpperCase()}</b>
                </h4>
                <h4 className="text-sm">
                  CLIPPED BY{" "}
                  <b>{String(clipData.creator.display_name).toUpperCase()}</b>{" "}ON{" "}
                  <b>
                    {String(
                      moment(clipData.clip.created_at).format("MMM DD[,] YYYY")
                    ).toUpperCase()}
                  </b>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
