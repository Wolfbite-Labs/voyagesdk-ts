import { describe, expect, it } from "bun:test";
import VoyageSDK from "../index";

const { vg } = new VoyageSDK(process.env.YAPOCK_API_URL);

describe("Yapock", () => {
  it("should correctly describe itself", async () => {
    const { data } = await vg.server.describeServer.get();

    expect(data).toContainKey("availableUserDomains");
  });
});

describe("User", () => {
  it('should find the user "rek"', async () => {
    const { data } = await vg.user({ username: "rek" }).get();

    expect(data).toBeObject();
  });
});
