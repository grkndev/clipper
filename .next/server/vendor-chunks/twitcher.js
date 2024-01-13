"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/twitcher";
exports.ids = ["vendor-chunks/twitcher"];
exports.modules = {

/***/ "(ssr)/./node_modules/twitcher/index.js":
/*!****************************************!*\
  !*** ./node_modules/twitcher/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(ssr)/./node_modules/axios/lib/axios.js\");\n\r\n\r\nclass Twitcher {\r\n    #token;\r\n    #client_id;\r\n    #client_secret;\r\n\r\n    /*\r\n    * Base class for Twitcher\r\n    * @param {string} token - Twitch API token\r\n    * @param {string} client_id - Twitch API client id\r\n    * @param {string} client_secret - Twitch API client secret\r\n    */\r\n    constructor({ token, client_id, client_secret }) {\r\n        this.#token = token;\r\n        this.#client_id = client_id;\r\n        this.#client_secret = client_secret;\r\n    }\r\n\r\n    /**\r\n    * Get Twitch API token\r\n    * @returns {object} - Twitch API token\r\n    */\r\n    async getToken() {\r\n        let res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`https://id.twitch.tv/oauth2/token?client_id=${this.#client_id}&client_secret=${this.#client_secret}&grant_type=client_credentials`)\r\n        return res.data;\r\n    }\r\n\r\n    /**\r\n    * Get Twitch Clip\r\n    * @param {string} clipURL - Twitch clip URL\r\n    * @returns {object} - Twitch clip\r\n    * @example\r\n    * let clip = await client.getClip(\"https://clips.twitch.tv/IncredulousTastyPoxPJSugar\")\r\n    * console.log(clip)\r\n    * // {\r\n    * //   success: true,\r\n    * //   streamer: {\r\n    * //     id: '123456789',\r\n    * //     login: 'streamer',\r\n    * //     display_name: 'Streamer',\r\n    * //     type: '',\r\n    * //     broadcaster_type: 'partner',\r\n    * //     description: 'Streamer',\r\n    * //     profile_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-profile_image-300x300.png',\r\n    * //     offline_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-channel_offline_image-1920x1080.png',\r\n    * //     view_count: 123456789\r\n    * //   },\r\n    * //   creator: {\r\n    * //     id: '123456789',\r\n    * //     login: 'creator',\r\n    * //     display_name: 'Creator',\r\n    * //     type: '',\r\n    * //     broadcaster_type: 'partner',\r\n    * //     description: 'Creator',\r\n    * //     profile_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-profile_image-300x300.png',\r\n    * //     offline_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-channel_offline_image-1920x1080.png',\r\n    * //     view_count: 123456789\r\n    * //   },\r\n    * //   clip: {\r\n    * //     id: 'IncredulousTastyPoxPJSugar',\r\n    * //     url: 'https://clips.twitch.tv/IncredulousTastyPoxPJSugar',\r\n    * //     video_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C123456789.mp4',\r\n    * //     embed_url: 'https://clips.twitch.tv/embed?clip=IncredulousTastyPoxPJSugar',\r\n    * //     video_id: '123456789',\r\n    * //     game_id: '123456789',\r\n    * //     language: 'en',\r\n    * //     title: 'Streamer',\r\n    * //     view_count: 123456789,\r\n    * //     created_at: '2021-01-01T00:00:00Z',\r\n    * //     thumbnail_url: 'https://clips-media-assets2.twitch.tv/AT-cm%7C123456789-preview-480x272.jpg',\r\n    * //     duration: 30.01,\r\n    * //     vod_offset: 0.0,\r\n    * //     is_featured: false\r\n    * //   }\r\n    * // }\r\n    */\r\n    async getClip(clipURL) {\r\n        let clipId = '';\r\n        if (clipURL.includes(\"https://clips.twitch.tv/\")) {\r\n            clipId = clipURL.replace(\"https://clips.twitch.tv/\", \"\");\r\n        } else if (clipURL.includes(\"https://www.twitch.tv/\") && clipURL.includes(\"/clip/\")) {\r\n            clipId = clipURL.replace(\"https://www.twitch.tv/\", \"\");\r\n        }\r\n\r\n      \r\n\r\n        let res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitch.tv/helix/clips?id=\" + clipId, {\r\n            headers: {\r\n                \"Authorization\": `Bearer ${this.#token}`,\r\n                \"Client-Id\": this.#client_id\r\n            }\r\n        })\r\n        if (res.data.data.length == 0) return {\r\n            error: \"Clip not found\",\r\n            success: false\r\n        };\r\n        let streamerInfo = (await this.searchUserByUserId(res.data.data[0].broadcaster_id)).data[0];\r\n        let creatorInfo = (await this.searchUserByUserId(res.data.data[0].creator_id)).data[0];\r\n        let VideoURL = res.data.data[0].thumbnail_url.replace(/-preview.*$/, '.mp4');\r\n        return {\r\n            success: true,\r\n            streamer: streamerInfo,\r\n            creator: creatorInfo,\r\n            clip: {\r\n                id: res.data.data[0].id,\r\n                url: res.data.data[0].url,\r\n                video_url: VideoURL,\r\n                embed_url: res.data.data[0].embed_url,\r\n                video_id: res.data.data[0].video_id,\r\n                game_id: res.data.data[0].game_id,\r\n                language: res.data.data[0].language,\r\n                title: res.data.data[0].title,\r\n                view_count: res.data.data[0].view_count,\r\n                created_at: res.data.data[0].created_at,\r\n                thumbnail_url: res.data.data[0].thumbnail_url,\r\n                duration: res.data.data[0].duration,\r\n                vod_offset: res.data.data[0].vod_offset,\r\n                is_featured: res.data.data[0].is_featured\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    /**\r\n     * Get Game\r\n     * @param {Number} game_id - Twitch game id\r\n     * @returns {object} - Twitch Game\r\n     * @example\r\n     * let game = await client.getGameById(\"123456789\")\r\n     * console.log(game)\r\n     * //response:\r\n     * {\r\n            \"data\": [\r\n                {\r\n                    \"id\": \"33214\",\r\n                    \"name\": \"Fortnite\",\r\n                    \"box_art_url\": \"https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg\",\r\n                    \"igdb_id\": \"1905\"\r\n                }\r\n                ...\r\n            ],\r\n            \"pagination\": {\r\n            \"cursor\": \"eyJiIjpudWxsLCJhIjp7IkN\"\r\n        }\r\n     */\r\n    async getGameById(game_id) {\r\n        if (typeof game_id !== \"number\") {\r\n            game_id = Number(game_id)\r\n            if (isNaN(game_id)) return {\r\n                error: \"Game id must be number\",\r\n                success: false\r\n            }\r\n        }\r\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitch.tv/helix/games?id=\" + game_id, {\r\n            headers: {\r\n                Authorization: `Bearer ${this.#token}`,\r\n                \"Client-Id\": this.#client_id\r\n            }\r\n        });\r\n        if (res.data.data.length == 0) return {\r\n            error: \"Game not found\",\r\n            success: false\r\n        }\r\n        return {\r\n            success: true,\r\n            data: res.data.data\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Get Game\r\n     * @param {string} game_name - Twitch game name\r\n     * @returns {object} - Twitch Game\r\n     * @example\r\n     * let game = await client.getGameByName(\"Fortnite\")\r\n     * console.log(game)\r\n     * //response:\r\n     * {\r\n     *  success: true,\r\n     * data: [\r\n     * {\r\n     * id: '33214',\r\n     * name: 'Fortnite',\r\n     * box_art_url: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-{width}x{height}.jpg',\r\n     * igdb_id: '1905'\r\n     * }\r\n     * ]\r\n     * }\r\n     */\r\n    async getGameByName(game_name) {\r\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitch.tv/helix/games?name=\" + game_name, {\r\n            headers: {\r\n                Authorization: `Bearer ${this.#token}`,\r\n                \"Client-Id\": this.#client_id\r\n            }\r\n        });\r\n        if (res.data.data.length == 0) return {\r\n            error: \"Game not found\",\r\n            success: false\r\n        }\r\n        return {\r\n            success: true,\r\n            data: res.data.data\r\n        }\r\n    }\r\n\r\n    /**\r\n    * Search Twitch Channel\r\n    * @param {string} channelName - Twitch channel name\r\n    * @returns {object} - Twitch channel\r\n    * @example\r\n    * let channel = await client.searchChannel(\"Streamer\")\r\n    * console.log(channel)\r\n    * //[\r\n  //{\r\n   // broadcaster_language: 'tr',\r\n  //  broadcaster_login: 'gweepcreative',\r\n  //  display_name: 'GweepCreative',\r\n  //  game_id: '516575',\r\n  //  game_name: 'VALORANT',\r\n //   id: '571983883',\r\n  //  is_live: false,\r\n  //  tag_ids: [],\r\n  //  tags: [ 'oyun', 'ghosts', 'valorant', 'espor', 'ESports', 'Türkçe' ],\r\n  //  thumbnail_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures///f618ba01-c0cb-45b1-930d-64a01b5568c9-profile_image-300x300.png',\r\n  //  title: 'RANKED VALO',\r\n  //  started_at: ''\r\n // },\r\n // {\r\n  //  broadcaster_language: '',\r\n  //  broadcaster_login: 'gweep_creative',\r\n  //  display_name: 'gweep_creative',\r\n  //  game_id: '0',\r\n  //  game_name: '',\r\n   // id: '606695369',\r\n   // is_live: false,\r\n  //  tag_ids: [],\r\n  //  tags: [],\r\n  //  thumbnail_url: 'https://static-cdn.jtvnw.net/user-default-pictures-uv/ce57700a-def9-11e9-842d-784f43822e80-profile_image-300x300.png',\r\n  //  title: '',\r\n //   started_at: ''\r\n // },\r\n  // ...\r\n]\r\n    */\r\n    async searchChannel(channelName) {\r\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitch.tv/helix/search/channels?query=\" + channelName, {\r\n            headers: {\r\n                Authorization: `Bearer ${this.#token}`,\r\n                \"Client-Id\": this.#client_id\r\n            }\r\n        });\r\n        return res.data.data;\r\n\r\n    }\r\n\r\n    /**\r\n     * Search Twitch User\r\n     * @param {string} userName - Twitch user name\r\n     * @returns {object} - Twitch user\r\n     * @example\r\n     * let user = await client.searchUserByName(\"Streamer\")\r\n     * console.log(user)\r\n     * // {\r\n     * //   success: true,\r\n     * //   data: [\r\n     * //     {\r\n     * //       id: '123456789',\r\n     * //       login: 'streamer',\r\n     * //       display_name: 'Streamer',\r\n     * //       type: '',\r\n     * //       broadcaster_type: 'partner',\r\n     * //       description: 'Streamer',\r\n     * //       profile_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-profile_image-300x300.png',\r\n     * //       offline_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-channel_offline_image-1920x1080.png',\r\n     * //       view_count: 123456789\r\n     * //     }\r\n     * //   ]\r\n     * // }\r\n     */\r\n    async searchUserByName(userName) {\r\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitch.tv/helix/users?login=\" + userName, {\r\n            headers: {\r\n                Authorization: `Bearer ${this.#token}`,\r\n                \"Client-Id\": this.#client_id\r\n            }\r\n        });\r\n        if (res.data.data.length == 0) return {\r\n            error: \"User not found\",\r\n            success: false\r\n        }\r\n        return {\r\n            success: true,\r\n            data: res.data.data\r\n        };\r\n    }\r\n\r\n    /**\r\n     * Search Twitch User\r\n     * @param {string} userId - Twitch user id\r\n     * @returns {object} - Twitch user\r\n     * @example\r\n     * let user = await client.searchUserByUserId(\"123456789\")\r\n     * console.log(user)\r\n     * // {\r\n     * //   success: true,\r\n     * //   data: [\r\n     * //     {\r\n     * //       id: '123456789',\r\n     * //       login: 'streamer',\r\n     * //       display_name: 'Streamer',\r\n     * //       type: '',\r\n     * //       broadcaster_type: 'partner',\r\n     * //       description: 'Streamer',\r\n     * //       profile_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-profile_image-300x300.png',\r\n     * //       offline_image_url: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123456789-channel_offline_image-1920x1080.png',\r\n     * //       view_count: 123456789\r\n     * //     }\r\n     * //   ]\r\n     * // }\r\n     */\r\n    async searchUserByUserId(userId) {\r\n        const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.twitch.tv/helix/users?id=\" + userId, {\r\n            headers: {\r\n                Authorization: `Bearer ${this.#token}`,\r\n                \"Client-Id\": this.#client_id\r\n            }\r\n        });\r\n        if (res.data.data.length == 0) return {\r\n            error: \"User not found\",\r\n            success: false\r\n        }\r\n        return {\r\n            success: true,\r\n            data: res.data.data\r\n        };\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Twitcher);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdHdpdGNoZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCO0FBQ0Esa0JBQWtCLGlDQUFpQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQUsscURBQXFELGdCQUFnQixpQkFBaUIsb0JBQW9CO0FBQ3ZJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNkNBQUs7QUFDN0I7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsTUFBTSxFQUFFLE9BQU87QUFDbEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUs7QUFDL0I7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9FQUFvRSxNQUFNLEVBQUUsT0FBTztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNkNBQUs7QUFDL0I7QUFDQSx5Q0FBeUMsWUFBWTtBQUNyRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLO0FBQy9CO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLO0FBQy9CO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFLO0FBQy9CO0FBQ0EseUNBQXlDLFlBQVk7QUFDckQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90Y2xpcC8uL25vZGVfbW9kdWxlcy90d2l0Y2hlci9pbmRleC5qcz80ZDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNsYXNzIFR3aXRjaGVyIHtcclxuICAgICN0b2tlbjtcclxuICAgICNjbGllbnRfaWQ7XHJcbiAgICAjY2xpZW50X3NlY3JldDtcclxuXHJcbiAgICAvKlxyXG4gICAgKiBCYXNlIGNsYXNzIGZvciBUd2l0Y2hlclxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdG9rZW4gLSBUd2l0Y2ggQVBJIHRva2VuXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGllbnRfaWQgLSBUd2l0Y2ggQVBJIGNsaWVudCBpZFxyXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50X3NlY3JldCAtIFR3aXRjaCBBUEkgY2xpZW50IHNlY3JldFxyXG4gICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKHsgdG9rZW4sIGNsaWVudF9pZCwgY2xpZW50X3NlY3JldCB9KSB7XHJcbiAgICAgICAgdGhpcy4jdG9rZW4gPSB0b2tlbjtcclxuICAgICAgICB0aGlzLiNjbGllbnRfaWQgPSBjbGllbnRfaWQ7XHJcbiAgICAgICAgdGhpcy4jY2xpZW50X3NlY3JldCA9IGNsaWVudF9zZWNyZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIEdldCBUd2l0Y2ggQVBJIHRva2VuXHJcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gVHdpdGNoIEFQSSB0b2tlblxyXG4gICAgKi9cclxuICAgIGFzeW5jIGdldFRva2VuKCkge1xyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KGBodHRwczovL2lkLnR3aXRjaC50di9vYXV0aDIvdG9rZW4/Y2xpZW50X2lkPSR7dGhpcy4jY2xpZW50X2lkfSZjbGllbnRfc2VjcmV0PSR7dGhpcy4jY2xpZW50X3NlY3JldH0mZ3JhbnRfdHlwZT1jbGllbnRfY3JlZGVudGlhbHNgKVxyXG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogR2V0IFR3aXRjaCBDbGlwXHJcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGlwVVJMIC0gVHdpdGNoIGNsaXAgVVJMXHJcbiAgICAqIEByZXR1cm5zIHtvYmplY3R9IC0gVHdpdGNoIGNsaXBcclxuICAgICogQGV4YW1wbGVcclxuICAgICogbGV0IGNsaXAgPSBhd2FpdCBjbGllbnQuZ2V0Q2xpcChcImh0dHBzOi8vY2xpcHMudHdpdGNoLnR2L0luY3JlZHVsb3VzVGFzdHlQb3hQSlN1Z2FyXCIpXHJcbiAgICAqIGNvbnNvbGUubG9nKGNsaXApXHJcbiAgICAqIC8vIHtcclxuICAgICogLy8gICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgKiAvLyAgIHN0cmVhbWVyOiB7XHJcbiAgICAqIC8vICAgICBpZDogJzEyMzQ1Njc4OScsXHJcbiAgICAqIC8vICAgICBsb2dpbjogJ3N0cmVhbWVyJyxcclxuICAgICogLy8gICAgIGRpc3BsYXlfbmFtZTogJ1N0cmVhbWVyJyxcclxuICAgICogLy8gICAgIHR5cGU6ICcnLFxyXG4gICAgKiAvLyAgICAgYnJvYWRjYXN0ZXJfdHlwZTogJ3BhcnRuZXInLFxyXG4gICAgKiAvLyAgICAgZGVzY3JpcHRpb246ICdTdHJlYW1lcicsXHJcbiAgICAqIC8vICAgICBwcm9maWxlX2ltYWdlX3VybDogJ2h0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvanR2X3VzZXJfcGljdHVyZXMvMTIzNDU2Nzg5LXByb2ZpbGVfaW1hZ2UtMzAweDMwMC5wbmcnLFxyXG4gICAgKiAvLyAgICAgb2ZmbGluZV9pbWFnZV91cmw6ICdodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L2p0dl91c2VyX3BpY3R1cmVzLzEyMzQ1Njc4OS1jaGFubmVsX29mZmxpbmVfaW1hZ2UtMTkyMHgxMDgwLnBuZycsXHJcbiAgICAqIC8vICAgICB2aWV3X2NvdW50OiAxMjM0NTY3ODlcclxuICAgICogLy8gICB9LFxyXG4gICAgKiAvLyAgIGNyZWF0b3I6IHtcclxuICAgICogLy8gICAgIGlkOiAnMTIzNDU2Nzg5JyxcclxuICAgICogLy8gICAgIGxvZ2luOiAnY3JlYXRvcicsXHJcbiAgICAqIC8vICAgICBkaXNwbGF5X25hbWU6ICdDcmVhdG9yJyxcclxuICAgICogLy8gICAgIHR5cGU6ICcnLFxyXG4gICAgKiAvLyAgICAgYnJvYWRjYXN0ZXJfdHlwZTogJ3BhcnRuZXInLFxyXG4gICAgKiAvLyAgICAgZGVzY3JpcHRpb246ICdDcmVhdG9yJyxcclxuICAgICogLy8gICAgIHByb2ZpbGVfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9qdHZfdXNlcl9waWN0dXJlcy8xMjM0NTY3ODktcHJvZmlsZV9pbWFnZS0zMDB4MzAwLnBuZycsXHJcbiAgICAqIC8vICAgICBvZmZsaW5lX2ltYWdlX3VybDogJ2h0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvanR2X3VzZXJfcGljdHVyZXMvMTIzNDU2Nzg5LWNoYW5uZWxfb2ZmbGluZV9pbWFnZS0xOTIweDEwODAucG5nJyxcclxuICAgICogLy8gICAgIHZpZXdfY291bnQ6IDEyMzQ1Njc4OVxyXG4gICAgKiAvLyAgIH0sXHJcbiAgICAqIC8vICAgY2xpcDoge1xyXG4gICAgKiAvLyAgICAgaWQ6ICdJbmNyZWR1bG91c1Rhc3R5UG94UEpTdWdhcicsXHJcbiAgICAqIC8vICAgICB1cmw6ICdodHRwczovL2NsaXBzLnR3aXRjaC50di9JbmNyZWR1bG91c1Rhc3R5UG94UEpTdWdhcicsXHJcbiAgICAqIC8vICAgICB2aWRlb191cmw6ICdodHRwczovL2NsaXBzLW1lZGlhLWFzc2V0czIudHdpdGNoLnR2L0FULWNtJTdDMTIzNDU2Nzg5Lm1wNCcsXHJcbiAgICAqIC8vICAgICBlbWJlZF91cmw6ICdodHRwczovL2NsaXBzLnR3aXRjaC50di9lbWJlZD9jbGlwPUluY3JlZHVsb3VzVGFzdHlQb3hQSlN1Z2FyJyxcclxuICAgICogLy8gICAgIHZpZGVvX2lkOiAnMTIzNDU2Nzg5JyxcclxuICAgICogLy8gICAgIGdhbWVfaWQ6ICcxMjM0NTY3ODknLFxyXG4gICAgKiAvLyAgICAgbGFuZ3VhZ2U6ICdlbicsXHJcbiAgICAqIC8vICAgICB0aXRsZTogJ1N0cmVhbWVyJyxcclxuICAgICogLy8gICAgIHZpZXdfY291bnQ6IDEyMzQ1Njc4OSxcclxuICAgICogLy8gICAgIGNyZWF0ZWRfYXQ6ICcyMDIxLTAxLTAxVDAwOjAwOjAwWicsXHJcbiAgICAqIC8vICAgICB0aHVtYm5haWxfdXJsOiAnaHR0cHM6Ly9jbGlwcy1tZWRpYS1hc3NldHMyLnR3aXRjaC50di9BVC1jbSU3QzEyMzQ1Njc4OS1wcmV2aWV3LTQ4MHgyNzIuanBnJyxcclxuICAgICogLy8gICAgIGR1cmF0aW9uOiAzMC4wMSxcclxuICAgICogLy8gICAgIHZvZF9vZmZzZXQ6IDAuMCxcclxuICAgICogLy8gICAgIGlzX2ZlYXR1cmVkOiBmYWxzZVxyXG4gICAgKiAvLyAgIH1cclxuICAgICogLy8gfVxyXG4gICAgKi9cclxuICAgIGFzeW5jIGdldENsaXAoY2xpcFVSTCkge1xyXG4gICAgICAgIGxldCBjbGlwSWQgPSAnJztcclxuICAgICAgICBpZiAoY2xpcFVSTC5pbmNsdWRlcyhcImh0dHBzOi8vY2xpcHMudHdpdGNoLnR2L1wiKSkge1xyXG4gICAgICAgICAgICBjbGlwSWQgPSBjbGlwVVJMLnJlcGxhY2UoXCJodHRwczovL2NsaXBzLnR3aXRjaC50di9cIiwgXCJcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjbGlwVVJMLmluY2x1ZGVzKFwiaHR0cHM6Ly93d3cudHdpdGNoLnR2L1wiKSAmJiBjbGlwVVJMLmluY2x1ZGVzKFwiL2NsaXAvXCIpKSB7XHJcbiAgICAgICAgICAgIGNsaXBJZCA9IGNsaXBVUkwucmVwbGFjZShcImh0dHBzOi8vd3d3LnR3aXRjaC50di9cIiwgXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS50d2l0Y2gudHYvaGVsaXgvY2xpcHM/aWQ9XCIgKyBjbGlwSWQsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0aGlzLiN0b2tlbn1gLFxyXG4gICAgICAgICAgICAgICAgXCJDbGllbnQtSWRcIjogdGhpcy4jY2xpZW50X2lkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogXCJDbGlwIG5vdCBmb3VuZFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHN0cmVhbWVySW5mbyA9IChhd2FpdCB0aGlzLnNlYXJjaFVzZXJCeVVzZXJJZChyZXMuZGF0YS5kYXRhWzBdLmJyb2FkY2FzdGVyX2lkKSkuZGF0YVswXTtcclxuICAgICAgICBsZXQgY3JlYXRvckluZm8gPSAoYXdhaXQgdGhpcy5zZWFyY2hVc2VyQnlVc2VySWQocmVzLmRhdGEuZGF0YVswXS5jcmVhdG9yX2lkKSkuZGF0YVswXTtcclxuICAgICAgICBsZXQgVmlkZW9VUkwgPSByZXMuZGF0YS5kYXRhWzBdLnRodW1ibmFpbF91cmwucmVwbGFjZSgvLXByZXZpZXcuKiQvLCAnLm1wNCcpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgIHN0cmVhbWVyOiBzdHJlYW1lckluZm8sXHJcbiAgICAgICAgICAgIGNyZWF0b3I6IGNyZWF0b3JJbmZvLFxyXG4gICAgICAgICAgICBjbGlwOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogcmVzLmRhdGEuZGF0YVswXS5pZCxcclxuICAgICAgICAgICAgICAgIHVybDogcmVzLmRhdGEuZGF0YVswXS51cmwsXHJcbiAgICAgICAgICAgICAgICB2aWRlb191cmw6IFZpZGVvVVJMLFxyXG4gICAgICAgICAgICAgICAgZW1iZWRfdXJsOiByZXMuZGF0YS5kYXRhWzBdLmVtYmVkX3VybCxcclxuICAgICAgICAgICAgICAgIHZpZGVvX2lkOiByZXMuZGF0YS5kYXRhWzBdLnZpZGVvX2lkLFxyXG4gICAgICAgICAgICAgICAgZ2FtZV9pZDogcmVzLmRhdGEuZGF0YVswXS5nYW1lX2lkLFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHJlcy5kYXRhLmRhdGFbMF0ubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzLmRhdGEuZGF0YVswXS50aXRsZSxcclxuICAgICAgICAgICAgICAgIHZpZXdfY291bnQ6IHJlcy5kYXRhLmRhdGFbMF0udmlld19jb3VudCxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHJlcy5kYXRhLmRhdGFbMF0uY3JlYXRlZF9hdCxcclxuICAgICAgICAgICAgICAgIHRodW1ibmFpbF91cmw6IHJlcy5kYXRhLmRhdGFbMF0udGh1bWJuYWlsX3VybCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiByZXMuZGF0YS5kYXRhWzBdLmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgdm9kX29mZnNldDogcmVzLmRhdGEuZGF0YVswXS52b2Rfb2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgaXNfZmVhdHVyZWQ6IHJlcy5kYXRhLmRhdGFbMF0uaXNfZmVhdHVyZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgR2FtZVxyXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGdhbWVfaWQgLSBUd2l0Y2ggZ2FtZSBpZFxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBUd2l0Y2ggR2FtZVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxldCBnYW1lID0gYXdhaXQgY2xpZW50LmdldEdhbWVCeUlkKFwiMTIzNDU2Nzg5XCIpXHJcbiAgICAgKiBjb25zb2xlLmxvZyhnYW1lKVxyXG4gICAgICogLy9yZXNwb25zZTpcclxuICAgICAqIHtcclxuICAgICAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImlkXCI6IFwiMzMyMTRcIixcclxuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGb3J0bml0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiYm94X2FydF91cmxcIjogXCJodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L3R0di1ib3hhcnQvMzMyMTQte3dpZHRofXh7aGVpZ2h0fS5qcGdcIixcclxuICAgICAgICAgICAgICAgICAgICBcImlnZGJfaWRcIjogXCIxOTA1XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcInBhZ2luYXRpb25cIjoge1xyXG4gICAgICAgICAgICBcImN1cnNvclwiOiBcImV5SmlJanB1ZFd4c0xDSmhJanA3SWtOXCJcclxuICAgICAgICB9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEdhbWVCeUlkKGdhbWVfaWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdhbWVfaWQgIT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgZ2FtZV9pZCA9IE51bWJlcihnYW1lX2lkKVxyXG4gICAgICAgICAgICBpZiAoaXNOYU4oZ2FtZV9pZCkpIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBlcnJvcjogXCJHYW1lIGlkIG11c3QgYmUgbnVtYmVyXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vYXBpLnR3aXRjaC50di9oZWxpeC9nYW1lcz9pZD1cIiArIGdhbWVfaWQsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuI3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNsaWVudC1JZFwiOiB0aGlzLiNjbGllbnRfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogXCJHYW1lIG5vdCBmb3VuZFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IEdhbWVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBnYW1lX25hbWUgLSBUd2l0Y2ggZ2FtZSBuYW1lXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIFR3aXRjaCBHYW1lXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbGV0IGdhbWUgPSBhd2FpdCBjbGllbnQuZ2V0R2FtZUJ5TmFtZShcIkZvcnRuaXRlXCIpXHJcbiAgICAgKiBjb25zb2xlLmxvZyhnYW1lKVxyXG4gICAgICogLy9yZXNwb25zZTpcclxuICAgICAqIHtcclxuICAgICAqICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICogZGF0YTogW1xyXG4gICAgICoge1xyXG4gICAgICogaWQ6ICczMzIxNCcsXHJcbiAgICAgKiBuYW1lOiAnRm9ydG5pdGUnLFxyXG4gICAgICogYm94X2FydF91cmw6ICdodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L3R0di1ib3hhcnQvMzMyMTQte3dpZHRofXh7aGVpZ2h0fS5qcGcnLFxyXG4gICAgICogaWdkYl9pZDogJzE5MDUnXHJcbiAgICAgKiB9XHJcbiAgICAgKiBdXHJcbiAgICAgKiB9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEdhbWVCeU5hbWUoZ2FtZV9uYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudHdpdGNoLnR2L2hlbGl4L2dhbWVzP25hbWU9XCIgKyBnYW1lX25hbWUsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuI3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNsaWVudC1JZFwiOiB0aGlzLiNjbGllbnRfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogXCJHYW1lIG5vdCBmb3VuZFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiBTZWFyY2ggVHdpdGNoIENoYW5uZWxcclxuICAgICogQHBhcmFtIHtzdHJpbmd9IGNoYW5uZWxOYW1lIC0gVHdpdGNoIGNoYW5uZWwgbmFtZVxyXG4gICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIFR3aXRjaCBjaGFubmVsXHJcbiAgICAqIEBleGFtcGxlXHJcbiAgICAqIGxldCBjaGFubmVsID0gYXdhaXQgY2xpZW50LnNlYXJjaENoYW5uZWwoXCJTdHJlYW1lclwiKVxyXG4gICAgKiBjb25zb2xlLmxvZyhjaGFubmVsKVxyXG4gICAgKiAvL1tcclxuICAvL3tcclxuICAgLy8gYnJvYWRjYXN0ZXJfbGFuZ3VhZ2U6ICd0cicsXHJcbiAgLy8gIGJyb2FkY2FzdGVyX2xvZ2luOiAnZ3dlZXBjcmVhdGl2ZScsXHJcbiAgLy8gIGRpc3BsYXlfbmFtZTogJ0d3ZWVwQ3JlYXRpdmUnLFxyXG4gIC8vICBnYW1lX2lkOiAnNTE2NTc1JyxcclxuICAvLyAgZ2FtZV9uYW1lOiAnVkFMT1JBTlQnLFxyXG4gLy8gICBpZDogJzU3MTk4Mzg4MycsXHJcbiAgLy8gIGlzX2xpdmU6IGZhbHNlLFxyXG4gIC8vICB0YWdfaWRzOiBbXSxcclxuICAvLyAgdGFnczogWyAnb3l1bicsICdnaG9zdHMnLCAndmFsb3JhbnQnLCAnZXNwb3InLCAnRVNwb3J0cycsICdUw7xya8OnZScgXSxcclxuICAvLyAgdGh1bWJuYWlsX3VybDogJ2h0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvanR2X3VzZXJfcGljdHVyZXMvLy9mNjE4YmEwMS1jMGNiLTQ1YjEtOTMwZC02NGEwMWI1NTY4YzktcHJvZmlsZV9pbWFnZS0zMDB4MzAwLnBuZycsXHJcbiAgLy8gIHRpdGxlOiAnUkFOS0VEIFZBTE8nLFxyXG4gIC8vICBzdGFydGVkX2F0OiAnJ1xyXG4gLy8gfSxcclxuIC8vIHtcclxuICAvLyAgYnJvYWRjYXN0ZXJfbGFuZ3VhZ2U6ICcnLFxyXG4gIC8vICBicm9hZGNhc3Rlcl9sb2dpbjogJ2d3ZWVwX2NyZWF0aXZlJyxcclxuICAvLyAgZGlzcGxheV9uYW1lOiAnZ3dlZXBfY3JlYXRpdmUnLFxyXG4gIC8vICBnYW1lX2lkOiAnMCcsXHJcbiAgLy8gIGdhbWVfbmFtZTogJycsXHJcbiAgIC8vIGlkOiAnNjA2Njk1MzY5JyxcclxuICAgLy8gaXNfbGl2ZTogZmFsc2UsXHJcbiAgLy8gIHRhZ19pZHM6IFtdLFxyXG4gIC8vICB0YWdzOiBbXSxcclxuICAvLyAgdGh1bWJuYWlsX3VybDogJ2h0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvdXNlci1kZWZhdWx0LXBpY3R1cmVzLXV2L2NlNTc3MDBhLWRlZjktMTFlOS04NDJkLTc4NGY0MzgyMmU4MC1wcm9maWxlX2ltYWdlLTMwMHgzMDAucG5nJyxcclxuICAvLyAgdGl0bGU6ICcnLFxyXG4gLy8gICBzdGFydGVkX2F0OiAnJ1xyXG4gLy8gfSxcclxuICAvLyAuLi5cclxuXVxyXG4gICAgKi9cclxuICAgIGFzeW5jIHNlYXJjaENoYW5uZWwoY2hhbm5lbE5hbWUpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS50d2l0Y2gudHYvaGVsaXgvc2VhcmNoL2NoYW5uZWxzP3F1ZXJ5PVwiICsgY2hhbm5lbE5hbWUsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuI3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNsaWVudC1JZFwiOiB0aGlzLiNjbGllbnRfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuZGF0YS5kYXRhO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCBUd2l0Y2ggVXNlclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJOYW1lIC0gVHdpdGNoIHVzZXIgbmFtZVxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gLSBUd2l0Y2ggdXNlclxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIGxldCB1c2VyID0gYXdhaXQgY2xpZW50LnNlYXJjaFVzZXJCeU5hbWUoXCJTdHJlYW1lclwiKVxyXG4gICAgICogY29uc29sZS5sb2codXNlcilcclxuICAgICAqIC8vIHtcclxuICAgICAqIC8vICAgc3VjY2VzczogdHJ1ZSxcclxuICAgICAqIC8vICAgZGF0YTogW1xyXG4gICAgICogLy8gICAgIHtcclxuICAgICAqIC8vICAgICAgIGlkOiAnMTIzNDU2Nzg5JyxcclxuICAgICAqIC8vICAgICAgIGxvZ2luOiAnc3RyZWFtZXInLFxyXG4gICAgICogLy8gICAgICAgZGlzcGxheV9uYW1lOiAnU3RyZWFtZXInLFxyXG4gICAgICogLy8gICAgICAgdHlwZTogJycsXHJcbiAgICAgKiAvLyAgICAgICBicm9hZGNhc3Rlcl90eXBlOiAncGFydG5lcicsXHJcbiAgICAgKiAvLyAgICAgICBkZXNjcmlwdGlvbjogJ1N0cmVhbWVyJyxcclxuICAgICAqIC8vICAgICAgIHByb2ZpbGVfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9qdHZfdXNlcl9waWN0dXJlcy8xMjM0NTY3ODktcHJvZmlsZV9pbWFnZS0zMDB4MzAwLnBuZycsXHJcbiAgICAgKiAvLyAgICAgICBvZmZsaW5lX2ltYWdlX3VybDogJ2h0dHBzOi8vc3RhdGljLWNkbi5qdHZudy5uZXQvanR2X3VzZXJfcGljdHVyZXMvMTIzNDU2Nzg5LWNoYW5uZWxfb2ZmbGluZV9pbWFnZS0xOTIweDEwODAucG5nJyxcclxuICAgICAqIC8vICAgICAgIHZpZXdfY291bnQ6IDEyMzQ1Njc4OVxyXG4gICAgICogLy8gICAgIH1cclxuICAgICAqIC8vICAgXVxyXG4gICAgICogLy8gfVxyXG4gICAgICovXHJcbiAgICBhc3luYyBzZWFyY2hVc2VyQnlOYW1lKHVzZXJOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkudHdpdGNoLnR2L2hlbGl4L3VzZXJzP2xvZ2luPVwiICsgdXNlck5hbWUsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuI3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNsaWVudC1JZFwiOiB0aGlzLiNjbGllbnRfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNlYXJjaCBUd2l0Y2ggVXNlclxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZCAtIFR3aXRjaCB1c2VyIGlkXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSAtIFR3aXRjaCB1c2VyXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogbGV0IHVzZXIgPSBhd2FpdCBjbGllbnQuc2VhcmNoVXNlckJ5VXNlcklkKFwiMTIzNDU2Nzg5XCIpXHJcbiAgICAgKiBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgICogLy8ge1xyXG4gICAgICogLy8gICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICogLy8gICBkYXRhOiBbXHJcbiAgICAgKiAvLyAgICAge1xyXG4gICAgICogLy8gICAgICAgaWQ6ICcxMjM0NTY3ODknLFxyXG4gICAgICogLy8gICAgICAgbG9naW46ICdzdHJlYW1lcicsXHJcbiAgICAgKiAvLyAgICAgICBkaXNwbGF5X25hbWU6ICdTdHJlYW1lcicsXHJcbiAgICAgKiAvLyAgICAgICB0eXBlOiAnJyxcclxuICAgICAqIC8vICAgICAgIGJyb2FkY2FzdGVyX3R5cGU6ICdwYXJ0bmVyJyxcclxuICAgICAqIC8vICAgICAgIGRlc2NyaXB0aW9uOiAnU3RyZWFtZXInLFxyXG4gICAgICogLy8gICAgICAgcHJvZmlsZV9pbWFnZV91cmw6ICdodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L2p0dl91c2VyX3BpY3R1cmVzLzEyMzQ1Njc4OS1wcm9maWxlX2ltYWdlLTMwMHgzMDAucG5nJyxcclxuICAgICAqIC8vICAgICAgIG9mZmxpbmVfaW1hZ2VfdXJsOiAnaHR0cHM6Ly9zdGF0aWMtY2RuLmp0dm53Lm5ldC9qdHZfdXNlcl9waWN0dXJlcy8xMjM0NTY3ODktY2hhbm5lbF9vZmZsaW5lX2ltYWdlLTE5MjB4MTA4MC5wbmcnLFxyXG4gICAgICogLy8gICAgICAgdmlld19jb3VudDogMTIzNDU2Nzg5XHJcbiAgICAgKiAvLyAgICAgfVxyXG4gICAgICogLy8gICBdXHJcbiAgICAgKiAvLyB9XHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHNlYXJjaFVzZXJCeVVzZXJJZCh1c2VySWQpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2FwaS50d2l0Y2gudHYvaGVsaXgvdXNlcnM/aWQ9XCIgKyB1c2VySWQsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuI3Rva2VufWAsXHJcbiAgICAgICAgICAgICAgICBcIkNsaWVudC1JZFwiOiB0aGlzLiNjbGllbnRfaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcjogXCJVc2VyIG5vdCBmb3VuZFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRhOiByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUd2l0Y2hlcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/twitcher/index.js\n");

/***/ })

};
;