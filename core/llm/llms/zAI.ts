import { LLMOptions } from "../../index.js";

import OpenAI from "./OpenAI.js";

class zAI extends OpenAI {
  static providerName = "zAI";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://localhost",
    useLegacyCompletionsEndpoint: false,
  };
}

export default zAI;
