"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import _ from "lodash";

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

export const HeroSection = () => {
  return (
    <section className="bg-dark-600">
      <div className="max-w-screen-xl mx-auto h-[312px] flex">
        <div className="h-full w-[540px] bg-[url(/images/d01.jpg)] bg-center bg-cover"></div>
        <div className="flex-grow py-4">
          <ChartContainer config={chartConfig} className="h-[290px]  w-full">
            <LineChart
              height={300}
              accessibilityLayer
              data={chartData}
              margin={{
                left: 32,
                right: 32,
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
        </div>
      </div>
    </section>
  );
};
