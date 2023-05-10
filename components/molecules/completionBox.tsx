interface CompletionBoxProps {
  prompt: string,
  response: string | null,
};

export default function CompletionBox({prompt, response = ''}: CompletionBoxProps){

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-300/50 my-4">
        <p className="inline-flex items-baseline"><span className="text-blue-500 font-bold">Question:</span> &nbsp; {prompt}</p> &nbsp; <button className="" aria-label="button">▶️</button>
        <p><span className="text-teal-500 font-bold">Response:</span> {response}</p>
      </div>
    </>
  )
}