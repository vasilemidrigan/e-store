const delay = (ms = 250) => new Promise((resolve) => setTimeout(resolve, ms));

/* reusable fetch template */

export default async function fetchTemplate(
  url,
  method,
  headers,
  body,
  cache = "no-store"
) {
  await delay();

  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
    cache: cache,
    // next: { revalidate: 10000 },
  });

  const data = await response.json();
  console.log(data);

  return data;
}
