import CardActionComponent from "@/components/CardActionComponent";
import CardComponent from "@/components/CardComponent";
import CardDramaComponent from "@/components/CardDramaComponent";
import CardScienceComponent from "@/components/CardScienceComponent";

export default function Home() {
  return (
    <div className="bg-red-950">
      <div>
        <img
          src="https://img.freepik.com/free-vector/cinema-theater-stage-with-rows-red-seats_1017-38724.jpg?w=900&t=st=1712588688~exp=1712589288~hmac=bde32c9ecd2018e61e185d0f18afbf9de9e19f364a44217f4c3e6828c4bfaabc"
          className="h-screen w-screen"
        ></img>
      </div>
      <div className="mt-5 p-8">
        <h1 className="text-xl text-white mb-3">All Movies &gt;</h1>
        <CardComponent />

        <h1 className="text-xl text-white mt-6 mb-3">Action Movie &gt;</h1>
        <CardActionComponent />

        <h1 className="text-xl text-white mt-6 mb-3">Drama Movie &gt;</h1>
        <CardDramaComponent />

        <h1 className="text-xl text-white mt-6 mb-3">
          Science Fiction Movie &gt;
        </h1>
        <CardScienceComponent />
      </div>
    </div>
  );
}
