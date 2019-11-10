import { Action } from '@ngrx/store';

export interface IActionPayload extends Action {
    payload: {[k: string]: string | number | [] | Object};
}