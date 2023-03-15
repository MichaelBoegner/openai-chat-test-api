let bodyData = {
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": "Hello!"}]
    }

try {
      const response = fetch("https://api.openai.com/v1/chat/completions?", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        body: JSON.stringify(bodyData)
      }).then((response) => console.log(response.json(), "RESPONSE JSON"));

    //   console.log(response.json(), "RESPONSE CONSOLE LOG");

    } catch(error) {
      console.error(error);
      alert(error.message);
    }
