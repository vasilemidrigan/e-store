/* headers with public and secret keys*/

export const publicHeaders = {
  "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const secretHeaders = {
  "X-Authorization": `${process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY_SECRET}`,
  Accept: "application/json",
  "Content-Type": "application/json",
};

/* 
  commercejs api has a limit of 240 requests
  per minute, so in order to avoid 429 ERROR, 
  (To many requests), inject a delay before 
  each request. (see fetchTemplate() 1st line)
*/

const delay = (ms = 750) => new Promise((resolve) => setTimeout(resolve, ms));

/* reusable fetch template */

export default async function fetchTemplate(url, method, headers, body) {
  await delay();

  const response = await fetch(url, {
    method: method,
    headers: headers,
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);

  if (data?.meta?.pagination?.links.next) {
    fetchTemplate(data.meta.pagination.links.next, method, headers, body);
  }

  return data;
}
