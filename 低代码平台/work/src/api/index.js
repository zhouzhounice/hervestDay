import http from "@/utils/request"
import config from "@/config"

export default {
    public: {
        login: {
            //url: `${config.API_URL}/system/user/list`,
            url: `${config.API_URL}/public/login`,
            name: "登录",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        logout: {
            //url: `${config.API_URL}/system/user/list`,
            url: `${config.API_URL}/public/login`,
            name: "登录",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
    },

    common: {
        logout: {
            url: `${config.API_URL}/common/logout`,
            name: "登录",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
    },

    pages: {
        getList: {
            url: `${config.API_URL}/pages/get-list`,
            name: "获取页面列表",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        getElementList: {
            url: `${config.API_URL}/pages/get-element-list`,
            name: "获取页面列表",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        save: {
            url: `${config.API_URL}/pages/save`,
            name: "新建编辑页面",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        saveElement: {
            url: `${config.API_URL}/pages/save-element`,
            name: "新建编辑页面",
            post: async function(data, config={is_json: 1}){
                return await http.post(this.url, data, config);
            }
        },

    },

    apps: {
        getList: {
            url: `${config.API_URL}/apps/get-list`,
            name: "获取应用列表",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        save: {
            url: `${config.API_URL}/apps/save`,
            name: "新建编辑应用",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        }
    },

    news: {
        getList: {
            url: `${config.API_URL}/news/get-list`,
            name: "获取文章列表",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        save: {
            url: `${config.API_URL}/news/save`,
            name: "新建编辑文章",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        }
    },

    depts: {
        getList: {
            url: `${config.API_URL}/depts/get-list`,
            name: "获取部门列表",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        },
        save: {
            url: `${config.API_URL}/depts/save`,
            name: "新建编辑部门",
            post: async function(data, config={}){
                return await http.post(this.url, data, config);
            }
        }
    },




}
