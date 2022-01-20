import { useMemo } from "react";
import qs from "qs";

export default function useQuery(options = { ignoreQueryPrefix: true }) {
  const { search } = window.location;

  return useMemo(() => qs.parse(search, options), [search, options]);
}
