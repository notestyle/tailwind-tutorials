import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Task 01</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full py-20 px-28 flex gap-4">
        <div className="w-1/2 ">
          <div className="text-sm font-medium text-slate-500 leading-4">
            Зуслангийн байшин
          </div>
          <div className="text-xl font-semibold mt-1">
            Хөвсгөлийн эрэг дээрх тансаг байшин
          </div>
          <div className="w-full flex justify-between text-xs my-2">
            <div className="text-sky-500 flex items-center ">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                class="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              4.78
            </div>
            <div>
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                fill="currentColor"
                class="mx-3 text-slate-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              Хөвсгөл, Монгол
            </div>
          </div>
          <button className="py-1 px-4 bg-sky-500 text-white rounded">
            Захиалах
          </button>
          <div className="text-sm text-slate-500 mt-6">
            Тойлогт жуулчны бааз нь жилийн дөрвөн улирал ажилладаг. Байгалын
            үзэсгэлэнт газар тохилог баазад амрангаа найрсаг үйлчилгээ авахыг
            бид танд санал болгож байна.
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4">
          <img
            src="/images/house1.jpg"
            alt="house"
            className="rounded w-full h-52 object-cover"
          />
          <div className="w-full grid grid-cols-2 gap-4">
            <img
              src="/images/house2.jpg"
              alt="house"
              className="w-full rounded h-32 object-cover"
            />
            <img
              src="/images/house3.jpg"
              alt="house"
              className="w-full rounded h-32 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
