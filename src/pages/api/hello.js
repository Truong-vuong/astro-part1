
export const getHello = () => {
  return new Response(
    JSON.stringify({
      greeting: 'Hello',
    }),
  )
}