import { Separator } from "@/components/ui/separator";
import { spans } from "next/dist/build/webpack/plugins/profiling-plugin";
import { Button } from "@/components/ui/button";
import React from "react";

const recommendItems = [
  { title: "RECOMMENDED COLUMN", caption: "オススメ" },
  { title: "RECOMMENDED DIET", caption: "ダイエット" },
  { title: "RECOMMENDED BEAUTY", caption: "美容" },
  { title: "RECOMMENDED HEALTH", caption: "健康" },
];

const defaultItem = {
  title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
  tags: ["#魚料理", "#和食", "#DHA"],
  time: "2021.05.17   23:25",
};

const columnItems = Array.from({ length: 8 }).map((_, index) => {
  return {
    ...defaultItem,
    image: `/images/column-${index + 1}.jpg`,
  };
});

const RecommendCard = ({
  title,
  caption,
}: {
  title: string;
  caption: string;
}) => {
  return (
    <div className="bg-dark-600 aspect-[4/3] flex justify-center items-center flex-col gap-2">
      <span className="text-xl text-center text-primary-300 max-w-[70%]">
        {title}
      </span>
      <Separator className="w-[56px] bg-white" />
      <span className="text-white">{caption}</span>
    </div>
  );
};

const ColumnCard = ({
  title,
  time,
  image,
  tags,
}: {
  title: string;
  image: string;
  time: string;
  tags: string[];
}) => {
  return (
    <figure>
      <div
        className="aspect-[5/3] flex items-end bg-center bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="text-white bg-primary-300 min-w-[144px] text-center text-[15px]">
          {time}
        </div>
      </div>
      <h1 className="text-[15px] line-clamp-2 mt-1">{title}</h1>
      <ul className="space-x-2 text-xs flex">
        {tags.map((tag, index) => {
          return (
            <li className="text-primary-400" key={index}>
              {tag}
            </li>
          );
        })}
      </ul>
    </figure>
  );
};

export default function ColumnPage() {
  return (
    <div className="container space-y-10 py-10">
      <section className="grid grid-cols-4 gap-6">
        {recommendItems.map((item, index) => (
          <RecommendCard {...item} key={index} />
        ))}
      </section>
      <section className="grid grid-cols-4 gap-3">
        {columnItems.map((item, index) => (
          <ColumnCard {...item} key={index} />
        ))}
      </section>

      <div className="text-center mt-6">
        <Button className="bg-gradient-to-tr from-primary-300 via-primary-400 to-primary-500 h-[56px] max-w-[288px] w-full text-lg">
          コラムをもっと見る
        </Button>
      </div>
    </div>
  );
}
