import React, { useEffect, useState } from "react";
import { getTrainingData } from "services/api/training";

export default function Page1({ experiment_id }) {
  const [trainingData, setTrainingData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTrainingData(experiment_id);
      setTrainingData(data.data);
    }

    fetchData();
  }, []); // eslint-disable-line

  return <div>Page 1 {trainingData}</div>;
}
