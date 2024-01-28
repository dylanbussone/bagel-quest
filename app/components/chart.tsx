"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

import type { ChartData } from "chart.js";

export const Chart = ({
  userVotes,
  totalVotes,
}: {
  userVotes: any[];
  totalVotes: any[];
}) => {
  const chartData: ChartData<"bar"> = {
    labels: [
      "Eltana",
      "Mt Bagel",
      "foo",
      "foo",
      "foo",
      "Eltana",
      "Mt Bagel",
      "foo",
      "foo",
      "foo",
      "Eltana",
      "Mt Bagel",
      "foo",
    ],
    datasets: [
      {
        label: "Your score",
        data: userVotes.map((userVote) => userVote.score),
        backgroundColor: "#C2655D",
      },
      {
        label: "Total score",
        data: totalVotes.map((totalVote) => totalVote.score),
        backgroundColor: "#87AE73",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
  };
  // For each bagel shop, show user vote chart on left and combined vote chart on right
  return <Bar data={chartData} options={options} />;
};
