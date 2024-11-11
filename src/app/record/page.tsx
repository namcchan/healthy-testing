"use client";

import React from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import _ from "lodash";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const recommendItems = [
  {
    title: "BODY RECORD",
    caption: "自分のカラダの記録",
    image: "/images/MyRecommend-1.jpg",
  },
  {
    title: "BODY RECORD",
    caption: "自分のカラダの記録",
    image: "/images/MyRecommend-2.jpg",
  },
  {
    title: "BODY RECORD",
    caption: "自分のカラダの記録",
    image: "/images/MyRecommend-3.jpg",
  },
];

function RecordCard({
  title,
  caption,
  image,
}: {
  title: string;
  caption: string;
  image: string;
}) {
  return (
    <div
      className="border-[24px] border-primary-300 aspect-square bg-center bg-cover flex"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex-grow flex flex-col justify-center items-center bg-black/50 bg-opacity-70">
        <h1 className="text-center text-primary-300 text-[25px]">{title}</h1>
        <div className="bg-primary-400 text-white min-w-[160px] text-center text-sm h-[24px] grid place-content-center">
          {caption}
        </div>
      </div>
    </div>
  );
}

export default function RecordPage() {
  const chartData = [
    { month: "6月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "7月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "8月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "9月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "10月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "11月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "12月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "1月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "2月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "3月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "4月", line1: _.random(0, 10), line2: _.random(0, 10) },
    { month: "5月", line1: _.random(0, 10), line2: _.random(0, 10) },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="container">
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-10 my-12">
        {recommendItems.map((item, index) => (
          <RecordCard {...item} key={index} />
        ))}
      </section>
      <section className="container bg-dark-500">
        <div className="flex text-white py-3 gap-6 items-center">
          <h1 className="w-[70px]">BODY RECORD</h1>
          <h1 className="text-xl">2021.05.21</h1>
        </div>
        <ChartContainer config={chartConfig} className="h-[200px] w-full">
          <LineChart
            height={300}
            accessibilityLayer
            data={chartData}
            margin={{
              left: 20,
              right: 20,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="line1"
              type="linear"
              stroke="#FFCC21"
              strokeWidth={2}
              dot
            />
            <Line
              dataKey="line2"
              type="linear"
              stroke="#8FE9D0"
              strokeWidth={2}
              dot
            />
          </LineChart>
        </ChartContainer>
        <div className="grid grid-cols-12 py-3 text-sm">
          <button className="w-[56px] h-[24px] rounded-full bg-white text-primary-300">
            日
          </button>
          <button className="w-[56px] h-[24px] rounded-full bg-white text-primary-300">
            週
          </button>
          <button className="w-[56px] h-[24px] rounded-full bg-white text-primary-300">
            月
          </button>
          <button className="w-[56px] h-[24px] rounded-full text-white bg-primary-300">
            年
          </button>
        </div>
      </section>
      <section className="container bg-dark-500 mt-10">
        <div className="flex text-white py-3 gap-6 items-center">
          <h1 className="w-[70px]">MY EXERCISE</h1>
          <h1 className="text-xl">2021.05.21</h1>
        </div>
        <ScrollArea className="h-72 w-full">
          <div className="grid grid-cols-2 gap-4 gap-y-2">
            {Array.from({ length: 50 }).map((tag, index) => (
              <div key={index}>
                <div className="flex justify-between">
                  <div className="grid">
                    <span className="text-white">家事全般（立位・軽い）</span>
                    <span className="text-primary-300">26kcal</span>
                  </div>
                  <span className="text-lg text-primary-300">10 min</span>
                </div>
                <Separator className="mt-1" />
              </div>
            ))}
          </div>
        </ScrollArea>
      </section>
      <section className="my-10">
        <h1 className="text-xl mb-2">MY DIARY</h1>
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((tag, index) => (
            <div
              className="border-2 border-gray-400 aspect-square p-3 space-y-2"
              key={index}
            >
              <div className="grid text-lg leading-none">
                <span>2021.05.21</span>
                <span>23:25</span>
              </div>
              <p className="text-xs">
                私の日記の記録が一部表示されます。
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button className="bg-gradient-to-tr from-primary-300 via-primary-400 to-primary-500 h-[56px] max-w-[288px] w-full text-lg">
            自分の日記をもっと見る
          </Button>
        </div>
      </section>
    </div>
  );
}
