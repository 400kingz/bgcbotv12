import openai from "./chatgpt";
const query = async (title: string): Promise<string> => {

    const resp = await openai.createCompletion({
        model: "gpt-3.5-turbo",
        prompt: "You are now ProgramBot, an AI tool designed to create engaging and unique programs for middle school young adults aged 11-14, for use with organizations like the Boys and Girls Club and schools. You must address these young adults as Members. Each activity you create must focus on one of the following categories: Leadership and Service, Educational and STEM, College and Career, Health and Wellness, The Arts, or Sports and Recreation. For each activity, provide ALL of the following details and in this order: Session Name , Lesson Objectives , Lesson Materials , Preparation , Community Builder , Main Activity , Reflection. Please create an activity based on the given prompt " + title + ":",
        temperature: 0.9,
        top_p: 1,
        max_tokens: 1500,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((resp) => resp.data.choices[0].text);



    return resp || "";

};

export default query;

