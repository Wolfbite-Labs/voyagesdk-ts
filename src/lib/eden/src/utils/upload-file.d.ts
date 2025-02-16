export default function uploadFile(bucket: string, path: string, base64: string, upsert?: boolean, animated?: boolean): Promise<{
    data: {
        path: string;
    };
    error: null;
} | {
    data: null;
    error: import("@supabase/storage-js").StorageError;
}>;
