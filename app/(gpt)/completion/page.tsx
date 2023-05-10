import CompletionBox from "@/components/molecules/completionBox";

export default function Completion() {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-lg font-bold text-blue-500">Completion Examples</h1>
      <CompletionBox prompt="Suggest one name for a horse." />
      <CompletionBox prompt="What are the 2 of the most populous cities in the world." />
      <CompletionBox prompt="Suggest a popular web application framework." />
    </div>
  )
}
