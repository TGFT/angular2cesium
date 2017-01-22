import {Observable} from "rxjs";
import {AsyncService} from "../async/async.service";
import {ActionType} from "../../../angular-cesium/models/action-type.enum";
import {convertToCesiumObj} from "../dataCovertor/convertToCesiumObject";
import {WebSocketSupplier} from "../webSocketSupplier/webSocketSupplier";
import {Injectable} from "@angular/core";

@Injectable()
export class TracksDataProvider{
    private _socket;

    constructor(private asyncService: AsyncService, webSocketSupplier: WebSocketSupplier){
        this._socket = webSocketSupplier.get();
    }

    get(){
        return Observable.create((observer) => {
            this._socket.on('birds', (data) => {
                this.asyncService.forEach(
                    data,
                    (acNotification) => {
                        let action;
                        if (acNotification.action === "ADD_OR_UPDATE") {
                            action = ActionType.ADD_UPDATE;
                        }
                        else if (acNotification.action === "DELETE") {
                            action = ActionType.DELETE
                        }
                        acNotification.actionType = action;
                        acNotification.entity = convertToCesiumObj(acNotification.entity);
                        observer.next(acNotification);
                    },
                    2000);
            });
        });
    }
}