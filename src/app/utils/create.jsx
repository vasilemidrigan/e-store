function createEntity(url, body) {
  fetch(url, {
    method: "POST",
    headers: {
      "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

export { createEntity };
