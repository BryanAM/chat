import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request) {
  if(!configuration.apiKey) {
    return NextResponse.error();
  }

  try {
    const clientReq = await request.json();

    const completionModel = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: clientReq.prompt,
      temperature: 0.3,
    })

    console.log(completionModel.data.choices[0].text)

    return NextResponse.json(completionModel.data.choices[0].text);

  } catch(err) {
    return NextResponse.error();
  }

}