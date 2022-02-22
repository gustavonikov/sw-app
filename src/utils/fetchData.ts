export async function fetchData(url: string) {
  const responseData = await fetch(url)

  return await responseData.json()
}
