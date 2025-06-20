
export default function Login() {
  return (
    <form action="" className="h-full w-full">
      <input
        placeholder="Email"
        className="w-96/100 h-1/6 m-2 justify-center items-center bg-black text-white p-3 border-2 border-dotted border-[#117104] rounded-xl"
      />
      <input
        placeholder="Password"
        className="w-96/100 h-1/6 m-2 justify-center items-center bg-black text-white p-3 border-2 border-dotted border-[#117104] rounded-xl"
      />

      <div className="flex flex-col w-auto h-1/4 m-1rounded-b-xl justify-center items-center mb-5">
              <button className="h-1/2 w-1/3 m-1 bg-[#117104] ml-1 rounded-xl border-solid border-2 border-[#117104] mb-5 ">
                🗝️
                Submit
              </button>
    </div>
    </form>
  );
}
