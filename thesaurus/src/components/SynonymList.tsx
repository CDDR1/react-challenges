import { Synonym } from "../types";

type Props = {
  synonyms: Synonym[];
  onClickHandler: (word: string) => void;
};

const SynonymList = ({ synonyms, onClickHandler }: Props) => {
  return (
    <>
      <ul>
        {synonyms.map((synonym) => (
          <li key={synonym.word}>
            <button className="list-btn" onClick={() => onClickHandler(synonym.word)}>
              {synonym.word}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SynonymList;
