import { getUrlConfig } from "../config/url"

class Base {

    private _proxyPrefix: string // proxy 前缀

    constructor() {
        // this._proxyPrefix = getUrlConfig().proxyUrl
        this._proxyPrefix = '/account'
    }

    /**
     * 获取 proxy 的 url
     * @param url 接口地址
     * @returns string 
     */
    public getProxyUrl(url: string): string {
        // return this._proxyPrefix + url
        return this._proxyPrefix
    }
}

export default Base