export const NEKO_SET_NAME = 'NEKO/SET_NAME';
export const NEKO_LOADING = 'NEKO/LOADING';
export const NEKO_ERROR = 'NEKO/ERROR';

interface INekoSetName {
    type: typeof NEKO_SET_NAME;
    name: string;
}

interface INekoLoading {
    type: typeof NEKO_LOADING;
    loading: boolean;
}
interface INekoError {
    type: typeof NEKO_ERROR;
    error: string;
}

export type INekoActions = INekoSetName | INekoLoading | INekoError;

export const nekoSetName = (name: string): INekoSetName => ({
    type: NEKO_SET_NAME,
    name,
});

export const nekoLoading = (loading: boolean): INekoLoading => ({
    type: NEKO_LOADING,
    loading,
});
export const nekoError = (error: string): INekoError => ({
    type: NEKO_ERROR,
    error,
});
