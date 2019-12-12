export interface INekoState {
    name: string;
    token: string;
}

export const nekoInitialState: INekoState = {
    name: 'test name',
    token: 'test token',
};
