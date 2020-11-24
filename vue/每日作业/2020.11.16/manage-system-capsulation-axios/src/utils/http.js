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
 * @method httpGET
 * 
 * import { httpGet } from '@/utils/http';
 *
 * httpGet('', payload).then().catch();
 * 
 * @param {*} url [请求地址]
 * @param {*} payload [请求参数]
 * @param {*} type [设置baseURL]
 */
export const httpGet = async(url, payload, type = "API1") => {
    try {
        // 获取基本地址
        serverURL = getURL(type);
        // 在axios上挂载基本地址
        featch.defaults.baseURL = serverURL;
        // 发起get请求
        const response = await featch.get(`${url}`, { params: payload });
        // 常量接收 get 请求发过来的数据 并将结果return
        const result = response.data;
        return result;
    } catch (err) {
        throw new Error(err)
    }
}

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

/**
 * @method httpDelete
 * 
 * 使用
 * import {httpDelete} from '@/utils/http'
 * 
 * httpDelete(url,payload).then().catch()
 * 
 * @param {*} url [请求地址]
 * @param {*} payload [请求参数]
 * @param {*} type [设置baseURL]
 */
export const httpDelete = async(url, payload, type = "API1") => {
    try {
        // 设置基本地址
        serverURL = getURL(type);
        // 在axios上挂载基本地址
        featch.defaults.baseURL = serverURL;
        // 发起delete请求
        const response = await featch.delete(`${url}`, {
            data: payload
        });
        // 接收后台返回的数据
        const result = response.data;
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

/**
 * @method httpPut
 *
 * 使用
 * import { httpPut } from '@/utils/http'
 *
 * httpPut('', payload).then().catch()
 *
 *
 * @param {*} url [ 请求地址 ]
 * @param {*} payload [ 请求参数 ]
 * @param {*} type [ 设置 baseURL ]
 */
export const httpPut = async(url, payload, type = "API1") => {
    try {
        // 设置基本路径
        serverURL = getURL(type);
        // 在axios上挂载基本地址
        featch.defaults.baseURL = serverURL;
        // 发起put请求
        const response = await featch.put(`${url}`, payload);
        // 接收后台返回的参数
        const result = response.data;
        return result;
    } catch (err) {
        throw new Error(err);
    }
};