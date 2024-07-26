import { useState } from "react";
import { Synonym } from "../types";

const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchSynonyms = async (word: string) => {
    setIsFetching(true);
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/words?rel_syn=${word}`
    );
    const data = await response.json();
    setSynonyms(data);
    setIsFetching(false);
  };

  return { synonyms, fetchSynonyms, isFetching };
};

export default useGetSynonyms;
