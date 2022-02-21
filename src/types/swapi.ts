export type RawCharacter = {
	name: string
	height: string
	mass: string
	hair_color: string
	eye_color: string
	birth_year: string
	gender: string
	homeworld: string
	films: string[]
	species: string[]
	vehicles: string[]
	starships: string[]
	created: string
	edited: string
	url: string
}

export type CharactersData = {
	count: number
	next: string | null
	previous: string | null
	results: RawCharacter[]
}

export type Character = {
	name: string
	height: string
	mass: string
}
