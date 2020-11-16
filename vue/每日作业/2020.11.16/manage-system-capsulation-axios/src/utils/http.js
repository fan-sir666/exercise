// 封装GET、POST、PUT、DELETE方法

import featch from "./featch";
import { baseHost } from "@/config";

const env = process.env.NODE_ENV;
let serverURL = "";

/**
 * @method getURL 获取请求地址
 *
 * @param {String} type [请求 地址环境类型]
 */
const getURL = type => {
    switch (env) {
        case "production":
            serverURL = baseHost[type].pro_host;
            break;
        case "development":
            serverURL = baseHost[type].dev_host;
            break;
        case "testing":
            serverURL = baseHost[type].test_host;
            break;
    }

    return serverURL;
};

/**
 * @method httpPost
 *
 * import { httpPost } from '@/libraries/axios/http'
 *
 * httpPost('', payload).then().catch()
 *
 * @param { String } url  [ 请求地址 ]
 * @param { Object } payload  [ 请求参数 ]
 */
export const httpPost = async(url, payload, type = "API1") => {
    try {
        serverURL = getURL(type);

        featch.defaults.baseURL = serverURL;

        const response = await featch.post(`${url}`, payload);

        const result = response.data;
        return result;
    } catch (err) {
        throw new Error(err);
    }
};