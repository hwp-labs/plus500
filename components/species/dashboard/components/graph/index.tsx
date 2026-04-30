import Image from "next/image";

export const Graph = () => {
  return (
    <div className="">
      <Image
        src="/images/graph.png"
        alt=""
        width={1193}
        height={255}
        priority
        className="w-full"
      />
    </div>
  );
};
