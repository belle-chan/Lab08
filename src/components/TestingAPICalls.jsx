import React, { useEffect, useState } from "react";
import { FetchData } from "../utils/services";

const TestingAPICalls = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    FetchData().then((data) => {
      setData(data);
    });
  });

  return (
    <div>
      {data.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
};

export default TestingAPICalls;
