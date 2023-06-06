import { Quest } from "../interfaces/quest";

interface Props {
  quest: Quest;
  handleOptionSelect: (option: Quest) => void;
  selectedOption?: Quest;
}
export const Question = ({
  quest,
  handleOptionSelect,
  selectedOption,
}: Props) => {
  return (
    <>
      <div
        className={`inline-flex items-center justify-between w-full p-5 transition-all rounded-lg ${
          selectedOption === quest
            ? 'bg-zinc-600 hover:bg-zinc-600 text-white'
            : 'bg-white hover:bg-gray-100 cursor-pointer'
        }`}
        key={quest.textoRespuesta}
        onClick={() => handleOptionSelect(quest)}
      >
        <div className="block">
          {/* <div className="w-full text-lg font-semibold">{q.textoRespuesta}</div> */}
          <div className="w-full text-sm">{quest.textoRespuesta}</div>
        </div>
      </div>
    </>
  );
};
