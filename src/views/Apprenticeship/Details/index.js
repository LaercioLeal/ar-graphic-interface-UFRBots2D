import React, { useEffect, useState } from "react";
import { useQuery } from "utils";

export default function Details() {
  const [experiment, setExperiment] = useState();
  const query = useQuery();

  useEffect(() => {
    async function fetchData() {
      const data = query;
      setExperiment(data);
    }

    fetchData();
  }, []); // eslint-disable-line

  return (
    <div>
      <h3>{experiment?.title}</h3>
      <p>{experiment?.createdAt}</p>
    </div>
  );
}
