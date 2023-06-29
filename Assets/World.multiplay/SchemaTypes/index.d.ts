declare module "ZEPETO.Multiplay.Schema" {

	import { Schema, MapSchema, ArraySchema } from "@colyseus/schema"; 


	interface State extends Schema {
		collectionItems: CollectionItems;
	}
	class CollectionItems extends Schema {
		coinsCount: number;
		potionCount: number;
	}
}