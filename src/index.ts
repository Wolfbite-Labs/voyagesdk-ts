import {Treaty, treaty} from "@elysiajs/eden";
import {Packbase} from "@/routes";

export default class VoyageSDK {
    public vg: Treaty.Create<Packbase>;

    constructor(baseUrl: string = 'https://shrew.api.packbase.app') {
        this.vg = treaty<Packbase>(baseUrl);
    }
}