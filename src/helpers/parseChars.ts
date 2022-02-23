import { RawCharacter } from '../types/swapi'

export function parseChars(rawCharacters: RawCharacter[]) {
  const chars = rawCharacters.map(char => ({
    name: char.name,
    height: char.height,
    mass: char.mass,
  }))

  return chars
}
