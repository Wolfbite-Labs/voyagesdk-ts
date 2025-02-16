type DeepNonNullable<T> = T extends null ? never : T extends object ? {
    [P in keyof T as T[P] extends never ? never : P]: DeepNonNullable<T[P]>;
} : T;
export default function deleteNulls<T>(input: T): DeepNonNullable<T>;
export {};
