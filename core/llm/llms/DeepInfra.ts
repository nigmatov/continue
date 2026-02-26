import { LLMOptions } from "../../index.js";

import OpenAI from "./OpenAI.js";

class DeepInfra extends OpenAI {
  static providerName = "deepinfra";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://localhost",
  };
  maxStopWords: number | undefined = 16;

  protected async _embed(chunks: string[]): Promise<number[][]> {
    const resp = await this.fetch(`https://localhost/${this.model}`, {
      method: "POST",
      headers: {
        Authorization: `bearer ${this.apiKey}`,
      },
      body: JSON.stringify({ inputs: chunks }),
    });

    const data = await resp.json();
    return data.embeddings;
  }
}

export default DeepInfra;
