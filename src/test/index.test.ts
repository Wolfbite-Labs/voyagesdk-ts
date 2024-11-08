import { describe, expect, it } from 'bun:test'
import { treaty } from "@elysiajs/eden";
import {Packbase} from "@/routes";

const app = treaty<Packbase>("http://localhost:8000");

describe('Yapock', () => {
    it('should correctly describe itself', async () => {
        const { data } = await app.server.describeServer.get()

        expect(data).toContainKey('availableUserDomains')
    })
})

describe('User', () => {
    it('should find the user "rek"', async () => {
        const { data } = await app.user({ username: 'rek' }).get()

        app.user.me.get()

        expect(data).toBeObject()
    })
})