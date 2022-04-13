import React, { useEffect } from "react";
import { getExperimentAllDataInfo } from "services";

export default function Page1({ experiment }) {
  useEffect(() => {
    getExperimentAllDataInfo({ id: experiment.id }).then(({ data }) => {
      console.log(data);
    });
  }, [experiment]);

  return <div>Page 1</div>;
}
