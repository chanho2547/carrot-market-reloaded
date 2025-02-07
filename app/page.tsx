export default function Home() {
  return (
    <main className="bg-gray-900  h-screen flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-screen-sm shadow-lg p-5 rounded-3xl flex flex-col md:flex-row gap-2 *:outline-none has-[:invalid]:ring-red-100 has-[:invalid]:ring">
        <input
          className="w-full rounded-full h-12  bg-gray-200 pl-5  ring ring-transparent focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="text"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90 transition-transform font-medium   md:px-10 peer-invalid:bg-red-100 peer-required:bg-green-500">
          Login
        </button>
      </div>
    </main>
  );
}
