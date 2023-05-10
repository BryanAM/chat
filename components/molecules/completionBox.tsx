'use client';

import { useState } from "react";
import Image from 'next/image';
import Circle from '../../assets/circles.svg';

interface CompletionBoxProps {
  prompt: string,
};

async function getResponse(prompt: string) {

  const res = await fetch('/api/completion', {
    method: 'POST',
    body: JSON.stringify({prompt})
  });
  
  const data = await res.json();
  
  return data;
};

export default function CompletionBox({prompt}: CompletionBoxProps){
  const [response, setResponse] = useState<string | null>('');

  async function generateResponse() {
    setResponse(null);
    const data = await getResponse(prompt);
    console.log(data);
    setResponse(data);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-300/50 my-4">
        <p className="inline-flex items-baseline"><span className="text-blue-500 font-bold">Question:</span> &nbsp; {prompt}</p> &nbsp; <button onClick={() => generateResponse()} className="" aria-label="button">▶️</button>
        <p><span className="text-teal-500 font-bold">Response:</span>
           &nbsp; {response == null && <Image className="inline-flex" width="20" src={Circle} alt="loader"/>}
          {response}
        </p>
      </div>
    </>
  )
}