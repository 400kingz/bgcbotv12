import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "OPENAI_SECRET_KEY",

});


const openai = new OpenAIApi(config)

export default openai;