export interface INekoState {
    name: string;
    loading: boolean;
    error: string;
}

export const nekoInitialState: INekoState = {
    name: 'test name',
    loading: false,
    error: '',
};
