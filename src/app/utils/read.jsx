function getEntities(url, params) {
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return fetch(url, {
    method: "GET",
    headers: {
      "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
}

export { getEntities };
