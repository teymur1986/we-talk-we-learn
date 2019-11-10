import { IStackExchangeAnswer } from './searching-list.reducer';
import { Action } from '@ngrx/store';
import { IActionPayload } from '../actions';

export const ADD_STORAGE_SUCCESS =  'ADD_STORAGE_SUCCESS';
export const ADD_STORAGE_FAIL =     'ADD_STORAGE_FAIL';

export class addStorageSuccess implements IActionPayload {
    readonly type = ADD_STORAGE_SUCCESS;
    payload: {
        storage: IStackExchangeAnswer[],
    };

    constructor(p: IStackExchangeAnswer[]) {
        this.payload = {
            storage: p,
        };
    }
}

export class addStorageFail implements IActionPayload {
    readonly type = ADD_STORAGE_FAIL;
    payload: {
        error: Error,
    };
}


