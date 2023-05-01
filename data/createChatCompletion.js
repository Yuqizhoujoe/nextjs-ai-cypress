const createChatCompletion1 = {
  request: {
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "asdjlaksjlkdas",
      },
    ],
    max_tokens: 1024,
    temperature: 0.5,
    n: 1,
  },
  response: {
    id: "chatcmpl-7AskLcepNLxYsNYqbdJoIsUy4915t",
    object: "chat.completion",
    created: 1682828081,
    model: "gpt-3.5-turbo-0301",
    usage: {
      prompt_tokens: 14,
      completion_tokens: 27,
      total_tokens: 41,
    },
    choices: [
      {
        message: {
          role: "assistant",
          content:
            "I'm sorry, I don't understand what you're trying to say. Can you please provide more information or ask a specific question?",
        },
        finish_reason: "stop",
        index: 0,
      },
    ],
  },
};

const createChatCompletionData = {
  data: {
    id: "chatcmpl-7AszEw2tVFcDVy65Gh2Tc8XJngrcb",
    object: "chat.completion",
    created: 1682829004,
    model: "gpt-3.5-turbo-0301",
    usage: {
      prompt_tokens: 13,
      completion_tokens: 46,
      total_tokens: 59,
    },
    choices: [
      {
        message: {
          role: "assistant",
          content:
            "As an AI language model, I cannot reciprocate love as I am not capable of feeling emotions. However, I can assist you in any way you need within my capabilities. Please let me know how I can help you.",
        },
        finish_reason: "stop",
        index: 0,
      },
    ],
  },
  status: 200,
  statusText: "",
  headers: {
    "cache-control": "no-cache, must-revalidate",
    "content-type": "application/json",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "OpenAI/NodeJS/3.2.1",
      Authorization:
        "Bearer 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",
    },
    method: "post",
    data: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"jojo i love you"}]}',
    url: "https://api.openai.com/v1/chat/completions",
  },
  request: {},
};

const chatCompletionStream = {
  data: 'data: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"role":"assistant"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"Anime"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" refers"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" to"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" animated"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" content"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":","},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" primarily"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" of"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" Japanese"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" origin"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"."},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" Anime"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" is"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" distinct"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" from"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" Western"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" animation"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" styles"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":","},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" with"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" unique"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" characteristics"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" such"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" as"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" large"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" eyes"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" and"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" exaggerated"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" facial"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" features"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"."},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" Anime"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" covers"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" a"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" wide"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" range"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" of"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" genres"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":","},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" from"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" science"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" fiction"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" and"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" fantasy"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" to"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" romance"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" and"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" comedy"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"."},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" It"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" has"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" gained"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" a"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" significant"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" audience"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" worldwide"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" and"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" has"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" become"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" a"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" cultural"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" phenomenon"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":","},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" with"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" many"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" fans"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" avid"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"ly"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" following"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" their"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" favorite"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" anime"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" series"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" or"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":" movies"},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content":"."},"index":0,"finish_reason":null}]}\n\ndata: {"id":"chatcmpl-7B9bbzYPTjK0wDH4EtQ1a4Pt2MVZg","object":"chat.completion.chunk","created":1682892887,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{},"index":0,"finish_reason":"stop"}]}\n\ndata: [DONE]\n\n',
  status: 200,
  statusText: "",
  headers: {
    "cache-control": "no-cache, must-revalidate",
    "content-type": "text/event-stream",
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "User-Agent": "OpenAI/NodeJS/3.2.1",
      Authorization:
        "Bearer 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",
    },
    method: "post",
    data: '{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"anime"}],"stream":true}',
    url: "https://api.openai.com/v1/chat/completions",
  },
  request: {},
};
