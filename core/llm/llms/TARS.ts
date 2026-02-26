import { LLMOptions } from "../../index.js";
import { osModelsEditPrompt } from "../templates/edit.js";

import OpenAI from "./OpenAI.js";

class TARS extends OpenAI {
  static providerName = "tars";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://localhost",
    model: "gpt-5-mini",
    promptTemplates: {
      edit: osModelsEditPrompt,
    },
    useLegacyCompletionsEndpoint: false,
  };
}

export default TARS;
