// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	interface Locals {
		user:{
			username: "string"
		}
	}
	// interface PageData {}
	// interface Platform {}
}

declare module '@cyclic.sh/dynamodb';
