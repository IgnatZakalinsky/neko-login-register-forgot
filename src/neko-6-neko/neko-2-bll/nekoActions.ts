export const NEKO_SET_NAME = 'NEKO/SET_NAME';

interface INekoSetName {
    type: typeof NEKO_SET_NAME;
    name: string;
}

export type INekoActions = INekoSetName;

export const nekoSetName = (name: string): INekoSetName => ({
    type: NEKO_SET_NAME,
    name,
});
