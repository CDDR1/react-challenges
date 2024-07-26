import { useState } from "react";
import SearchBar from "./components/SearchBar";
import SynonymList from "./components/SynonymList";
import useGetSynonyms from "./hooks/useGetSynonyms";

function App() {
  const [word, setWord] = useState<string>("");
  const { synonyms, fetchSynonyms, isFetching } = useGetSynonyms();

  const handleFormSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    fetchSynonyms(word);
    setWord("");
  };

  const handleClick = async (word: string) => {
    fetchSynonyms(word);
  };

  return (
    <main className="main-section">
      <SearchBar
        value={word}
        onSubmitHandler={handleFormSubmission}
        onChangeHandler={setWord}
      />
      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <SynonymList synonyms={synonyms} onClickHandler={handleClick} />
      )}
    </main>
  );
}

export default App;
