import { CharactersData } from '../types/swapi'

async function getInCache(url: string): Promise<CharactersData | undefined> {
  const cachedResponse = await caches.match(url)

  if (!cachedResponse) {
    return 
  }

  return await cachedResponse.json()
}

export async function fetchWithCacheAPI(url: string, newCacheName: string): Promise<CharactersData | undefined> {
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
