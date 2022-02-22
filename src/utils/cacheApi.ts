async function getInCache(url: string): Promise<CharacterData | undefined> {
  const cachedResponse = await caches.match(url)

  if (!cachedResponse) {
    return 
  }

  return await cachedResponse.json()
}

export async function fetchData(url: string, newCacheName = 'swapi'): Promise<CharacterData | undefined> {
  if (!('caches' in window)) {
    return
  }

  const cachedResponseData = await getInCache(url)

  if (!cachedResponseData) {
    const newCache = await caches.open(newCacheName)
    await newCache.add(url)

    const cachedResponse = await getInCache(url)

    return cachedResponse
  }

  return cachedResponseData
}
