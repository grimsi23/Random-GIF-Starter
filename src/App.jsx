import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="flex flex-col w-100vw  relative background h-100vh">
      <h1 className="bg-white rounded-lg text-center w-11/12 mt-[40px]
      px-10 py-2 text-4xl font-bold mx-auto">
       RANDOM GIFS 
       </h1> 
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random/>
        <Tag/>
      </div>
    </div>

  );
}
