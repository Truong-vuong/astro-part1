// Outputs: /builtwith.json
export async function get({params, request}) {
  console.log(params)
    return {
      body: JSON.stringify({
        name: 'Astro',
        url: 'https://astro.build/',
      }),
    };
  }