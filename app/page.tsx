export default function Home() {
  return (
    <main className="bg-gray-300 h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg p-5 rounded-2xl w-full max-w-md">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-bold -mb-1">
              In Transit
            </span>
            <span className="text-2xl font-bold">CoolBlue</span>
            <div className="my-2 flex items-center gap-2">
              <span className="bg-green-400 text-white uppercase px-2 py-1 text-xs font-medium rounded-xl">
                Today
              </span>
              <span>9:30-10:30</span>
            </div>
          </div>
          <div className="size-12 bg-orange-500 rounded-full" />
        </div>
        <div>
          <div className="relative">
            <div className="bg-gray-200 absolute w-full h-2 rounded-full" />
            <div className="bg-green-400 absolute w-1/2 full h-2 rounded-full" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 text-gray-500">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
