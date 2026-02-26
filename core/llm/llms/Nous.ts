import { LLMOptions } from "../..";

import OpenAI from "./OpenAI";

class Nous extends OpenAI {
  static providerName = "nous";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://localhost",
    useLegacyCompletionsEndpoint: false,
  };
}

export default Nous;
