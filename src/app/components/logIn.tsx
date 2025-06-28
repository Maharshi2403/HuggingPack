import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function request(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/v1/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      });

      const strres = await response.json();
      console.log(strres.token);

      if (response.ok) {
        router.push("/Dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <form action="" className="h-full w-full">
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="w-96/100 h-1/6 m-2 justify-center items-center bg-black text-white p-3 border-2 border-dotted border-[#117104] rounded-xl"
      />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-96/100 h-1/6 m-2 justify-center items-center bg-black text-white p-3 border-2 border-dotted border-[#117104] rounded-xl"
      />

      <div className="flex flex-col w-auto h-1/4 m-1rounded-b-xl justify-center items-center mb-5">
        <button
          className="h-1/2 w-1/3 m-1 bg-[#117104] ml-1 rounded-xl border-solid border-2 border-[#117104] mb-5 "
          onClick={request}
        >
          🗝️ Submit
        </button>
      </div>
    </form>
  );
}
