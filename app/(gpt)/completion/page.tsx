import CompletionBox from "@/components/molecules/completionBox";

export default function Completion() {
  return (
    <div className="flex flex-col justify-center">
      <h1>Completion Examples</h1>
      <CompletionBox prompt="Here is an example of a question." />
      <CompletionBox prompt="Here is an example of a question." />
      <CompletionBox prompt="Here is an example of a question." />
    </div>
  )
}
