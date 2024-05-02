import Image from "next/image";
import Divider from "./components/Divider";

export default function Home() {
  return (
    <main className="h-[92vh]">
      <section className="flex justify-center items-end text-center h-[35vh]">
        <ul className="grid gap-1">
          <li className="text-3xl font-semibold">Buy me a chai
            <lord-icon
              src="https://cdn.lordicon.com/tckirjgy.json"
              trigger="hover"
            >
            </lord-icon>
          </li>

          <li className="text-sm">A crowdfunding platform for creators.Get funded by your fans and followers. Start now!</li>
          <li className="">
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start now</button>

            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read more</button>
          </li>

        </ul>
      </section>
      <Divider />
      <section>
        <div className="container mx-auto grid grid-rows-[0.8fr_1fr]">
          <h2 className="text-center text-3xl font-semibold">Your fans can buy you a chai</h2>
          <ul className="grid grid-flow-col">
            <li className= "grid place-items-center">
              <div className='size-16 bg-rose-400 rounded-full'></div>
              <h4 className="font-semibold">Fans want to help</h4>
              <h5 className="text-sm">Your fans are available for you to help you</h5>
            </li>
            <li className="grid place-items-center">
              <div className='size-16 bg-rose-400 rounded-full'></div>
              <h4 className="font-semibold">Fans want to help</h4>
              <h5 className="text-sm">Your fans are available for you to help you</h5>
            </li>
            <li className="grid place-items-center">
              <div className='size-16 bg-rose-400 rounded-full'></div>
              <h4 className="font-semibold">Fans want to help</h4>
              <h5 className="text-sm">Your fans are available for you to help you</h5>
            </li>
          </ul>
        </div>
      </section>
      <Divider />
      <section>
      <div className="container mx-auto grid grid-rows-[0.8fr_1fr]">
          <h2 className="text-center text-3xl font-semibold">Your fans can buy you a chai</h2>
          <ul className="grid grid-flow-col">
            <li className= "grid place-items-center">
              <div className='size-16 bg-rose-400 rounded-full'></div>
              <h4 className="font-semibold">Fans want to help</h4>
              <h5 className="text-sm">Your fans are available for you to help you</h5>
            </li>
            <li className="grid place-items-center">
              <div className='size-16 bg-rose-400 rounded-full'></div>
              <h4 className="font-semibold">Fans want to help</h4>
              <h5 className="text-sm">Your fans are available for you to help you</h5>
            </li>
            <li className="grid place-items-center">
              <div className='size-16 bg-rose-400 rounded-full'></div>
              <h4 className="font-semibold">Fans want to help</h4>
              <h5 className="text-sm">Your fans are available for you to help you</h5>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
