import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "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",

});


const openai = new OpenAIApi(config)

export default openai;