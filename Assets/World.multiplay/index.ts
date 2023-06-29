import { Sandbox, SandboxOptions, SandboxPlayer } from "ZEPETO.Multiplay";

export default class extends Sandbox {

    onCreate(options: SandboxOptions) {
        //initialize coinsCount with a value
        this.state.collectionItems.coinsCount = 0;

        //3.) listen for message from client with the heading "CLIENT_GREETING"
        this.onMessage("CLIENT_GREETING", (client : SandboxPlayer, message : string) => {
            console.log("[GREETING] 3.) " + message);

            //4.) send message to client with heading "SERVER_GREETING"
            console.log("[GREETING] 4.) Send message to client from server");
            client.send("SERVER_GREETING", "Hi Client, Great to Meet You!");
        }) 


        //C.) listen for message from client with the heading "CLIENT_COLLECT_COIN"
        this.onMessage("CLIENT_COLLECT_COIN", (client : SandboxPlayer, message : number) => {
            console.log("[COIN_COLLECT] C.) Server got coin collect message from client");

            //do some logic to add coins
            //D.) save coinsCount
            this.state.collectionItems.coinsCount += message; 
        
            console.log("[COIN_COLLECT] D.) Server Coin count is: " + this.state.collectionItems.coinsCount);
        });
    }

    onJoin(client: SandboxPlayer) {
        
    }

    onLeave(client: SandboxPlayer, consented?: boolean) {
        
    }
}