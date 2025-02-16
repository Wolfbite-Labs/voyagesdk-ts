/**
 * A packs heartbeat is a calculated value, based on the number of active members, number of <14 day old posts, and the number of >30 day old accounts.
 */
export default function packCalculateHeartbeat(packID: string): Promise<number>;
