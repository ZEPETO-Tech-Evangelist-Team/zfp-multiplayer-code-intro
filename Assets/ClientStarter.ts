import { Room } from 'ZEPETO.Multiplay';
import { State } from 'ZEPETO.Multiplay.Schema';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'

export default class ClientStarter extends ZepetoScriptBehaviour {
    public MultiplayVariable : ZepetoWorldMultiplay;

    private _room : Room;

    Start() {    
        this.MultiplayVariable.RoomJoined += (room : Room) => {
            //make a reference to the room object
            this._room = room;

            //1.) A.) Get reference to the room when you (client) joins the room
            console.log("[GREETING] [COIN_COLLECT] 1.) A.) !!!!! Client: Room Joined !!!!!");

            //5.) Receive message with heading "SERVER_GREETING" coming from server
            room.AddMessageHandler("SERVER_GREETING", (message: string) => {
                console.log("[GREETING] 5.) " + message);
            });

            // Register OnStateChangeCallback function to be called when schema variables change on server
            this._room.OnStateChange += this.OnStateChangeCallback;
        }
    }

    //2.) Send a message to the room using the _room variable that we made
    SendGreetingToServer() {
        console.log("[GREETING] 2.) Send Greeting To Server");
        this._room.Send("CLIENT_GREETING", "Hi Server! I'm the Client!");
    }

    //B.) Send a message to the room using the _room variable that we made
    SendCollectCoinToServer() {
        console.log("[COIN_COLLECT] B.) Send Collect Coint To Server");
        this._room.Send("CLIENT_COLLECT_COIN", 10);
    }

    //E.) collectionItems changed on server, and OnStatechangeCallback is called) 
    OnStateChangeCallback(state : State, isFirst : boolean) {
        console.log("[COIN_COLLECT] E.) Coins on Server: " + state.collectionItems.coinsCount);
    }

}