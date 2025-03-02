/**
 * @fileoverview This file is the entry point of the application.
 */
import { Elysia } from 'elysia';
declare const Yapock: Elysia<"", false, {
    decorator: {};
    store: {};
    derive: {};
    resolve: {};
}, {
    type: {};
    error: {};
}, {
    schema: {};
    macro: {};
    macroFn: {};
}, {}, {
    derive: {};
    resolve: {};
    schema: {};
}, {
    derive: {};
    resolve: {
        [x: string]: any;
    };
    schema: {};
}>;
export type YapockType = typeof Yapock;
export {};
