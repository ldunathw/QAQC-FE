import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ labels, values, colors }) {
  return (
    <Pie
      data={{
        labels,
        datasets: [
          {
            data: values,
            backgroundColor: colors,
            borderWidth: 1,
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "bottom",
            labels: { boxWidth: 12 },
          },
        },
      }}
    />
  );
}
