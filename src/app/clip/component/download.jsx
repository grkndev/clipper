import Image from "next/image";

export default function Download({ clipData }) {
  const download = [
    {
      video: "1080p",
      fps: "@ 60 fps",
      url: clipData.video_url,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <video
          
            src={clipData.video_url}
            width={338}
            className="w-full rounded-xl"
            poster={clipData.thumbnail_url}
            controls
          />
        </div>
        <div className="grid gap-3 grid-cols-2">
          {download.map((element) => (
         
              <a key={element.url} href={element.url} download="renamed.mp4" className="w-full bg-white group overflow-hidden grid content-between pt-5 pl-5  shadow-xl rounded-xl h-40">
                <div>
                  <div className="w-9 absolute -ml-7 -mt-9 h-9 flex items-center justify-center text-white bg-clipper shadow-xl rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                      viewBox="0 0 512 512"
                    >
                      <path d="M464,384.39a32,32,0,0,1-13-2.77,15.77,15.77,0,0,1-2.71-1.54l-82.71-58.22h0A32,32,0,0,1,352,295.7V216.3a32,32,0,0,1,13.58-26.16l82.71-58.22a15.77,15.77,0,0,1,2.71-1.54,32,32,0,0,1,45,29.24V352.38a32,32,0,0,1-32,32Z" />
                      <path d="M268,400H84a68.07,68.07,0,0,1-68-68V180a68.07,68.07,0,0,1,68-68H268.48A67.6,67.6,0,0,1,336,179.52V332A68.07,68.07,0,0,1,268,400Z" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div>
                      <h1 className="text-xl font-bold">{element.video}</h1>
                      <h4 className="text-sm">{element.fps}</h4>
                    </div>
                  </div>
                </div>
                <div className="flex items-end   justify-end">
                  <div className="bg-clipper group-hover:bg-purple-300 group-hover:w-32 group-hover:h-32 flex justify-center items-center text-white   rounded-tl-full w-20 h-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 fill-current ml-4 mt-2 group-hover:-mt-6 group-hover:text-black group-hover:ml-9"
                      viewBox="0 0 512 512"
                    >
                      <path d="M376,160H272V313.37l52.69-52.68a16,16,0,0,1,22.62,22.62l-80,80a16,16,0,0,1-22.62,0l-80-80a16,16,0,0,1,22.62-22.62L240,313.37V160H136a56.06,56.06,0,0,0-56,56V424a56.06,56.06,0,0,0,56,56H376a56.06,56.06,0,0,0,56-56V216A56.06,56.06,0,0,0,376,160Z" />
                      <path d="M272,48a16,16,0,0,0-32,0V160h32Z" />
                    </svg>
                  </div>
                </div>
              </a>
           
          ))}
        </div>
      </div>
    </>
  );
}
