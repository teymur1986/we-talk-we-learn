import { IActionPayload } from '../actions';
import * as actions from './searching-list.actions';

export interface ISearchListItem {
    title: string;
    score: number;
    count: number;
    link: string;
}

export interface IStackExchangeAnswer extends ISearchListItem {
    view_count: number;
}

export interface ISearchListState {
    storage: IStackExchangeAnswer[];
}

export const initialListState: ISearchListState = {
    storage: [],
};

export const searchingListReducer = (state = initialListState, action: IActionPayload) => {
    switch (action.type) {
        case actions.ADD_STORAGE_SUCCESS:
            return {
                ...state,
                storage: action.payload.storage,
            };
        case actions.ADD_STORAGE_FAIL:
            return state;
        default: return state;
    }
};
