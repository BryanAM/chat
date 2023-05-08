'use client';

export default function SubmitControls() {
  return (
    <form className="my-8 flex">
      <input className="h-8 grow rounded-lg" type="text" placeholder="Enter message..."/>
      <button className="mx-2 w-24 rounded-lg border-solid border-2 border-blue-500/20 color-gray hover:bg-sky-500 hover:text-white" type="submit" aria-label="submit">Submit</button>
    </form>
  )
};
