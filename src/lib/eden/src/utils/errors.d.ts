export default function ThrowError(message: {
    name: string;
    cause?: any;
    message?: string;
}): Error;
export declare function HTTPError(set: any, status: number, error: {
    cause?: string;
    code?: string;
    name?: string;
    message?: string;
    detail?: any;
    value?: {
        summary: string;
    };
}): {
    cause?: string;
    code?: string;
    name?: string;
    message?: string;
    detail?: any;
    value?: {
        summary: string;
    };
};
export declare const ErrorTypebox: import("@sinclair/typebox").TObject<{
    summary: import("@sinclair/typebox").TString;
}>;
