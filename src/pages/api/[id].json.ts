import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Dan"]

export const getById: APIRoute = ({ params, request }) => {
  const id = params.id;
  return {
    body: JSON.stringify({
      name: usernames[id]
    })
  }
};

export function getStaticPaths () {
  return [
    { params: { id: "0"} },
    { params: { id: "1"} },
    { params: { id: "2"} },
  ]
}