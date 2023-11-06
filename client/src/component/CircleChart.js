import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

export const CircleChart = ({ targetScore, achievedscore }) => {
  const gettingNeddedScore = (targetScore, achievedscore) => {
    const neededScore = targetScore - achievedscore;
    if (neededScore > 0) {
      return neededScore;
    } else {
      return 0;
    }
  };

  const data = [
    { name: "Group A", value: achievedscore },
    { name: "Group B", value: gettingNeddedScore(targetScore, achievedscore) },
  ];

  // const totalValue = data.reduce((sum, entry) => sum + entry.value, 0);
  const percentage = ((data[0].value / targetScore) * 100).toFixed(0);
  const [isLabelVisible, setLabelVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLabelVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <ResponsiveContainer width="100%" height={130}>
        <PieChart >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            dataKey="value"
            innerRadius={"75%"}
            outerRadius={"105%"}
          >
            {data.map((entry, index) => {
              if (index === 1) {
                return <Cell key={`cell-${index}`} fill="red" />;
              }
              return <Cell key={`cell-${index}`} fill="green" />;
            })}
            <Label className="circle_label"
              value={`${percentage <= 100 ? percentage : "+ 100"}%`}
              position="center"
              fill="black"
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                fontFamily: "Roboto",
                fill: "var(--yellow)",
                opacity: isLabelVisible ? 1 : 0,
                transition: "opacity 1s ease-in-out",
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
