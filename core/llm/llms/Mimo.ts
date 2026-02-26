import { LLMOptions } from "../../index.js";

import OpenAI from "./OpenAI.js";

class Mimo extends OpenAI {
  static providerName = "mimo";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://localhost",
    model: "mimo-v2-flash",
  };
}

export default Mimo;
