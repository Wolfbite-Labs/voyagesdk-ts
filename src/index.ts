import {Treaty, treaty} from '@elysiajs/eden'
import {Packbase} from '@/routes'
import {createClient, SupabaseClient} from '@supabase/supabase-js'

export default class VoyageSDK {
    baseURL: string
    vg: Treaty.Create<Packbase> & {
        supabase?: SupabaseClient<any, any, any>;
    }

    constructor(baseURL: string = 'https://shrew-api.packbase.app', options?: {
        token?: string;
        supabase: {
            client?: any;
            key?: string;
            URL?: string;
        }
    }) {
        this.baseURL = baseURL
        this.vg = treaty<Packbase>(this.baseURL, {
            headers: {
                authentication: `Bearer ${options?.token || ''}`
            }
        })

        if (options?.supabase) {
            const {client, key, URL} = options.supabase
            this.vg.supabase = client || createClient(URL || '', key || '')
        }
    }
}