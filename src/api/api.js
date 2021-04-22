import axios from "axios";

const BASE_URL = "http://localhost:3005";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class ImageApi {

    static async request(endpoint, data = {}, method = "get") {
        console.debug("API Call:", endpoint, data, method);
    
        const url = `${BASE_URL}/${endpoint}`;
        // const headers = { Authorization: `Bearer ${JoblyApi.token}` };
        const params = (method === "get")
            ? data
            : {};
    
        try {
          return (await axios({ url, method, data, params, headers })).data;
        } catch (err) {
          console.error("API Error:", err.response);
          let message = err.response.data.error.message;
          throw Array.isArray(message) ? message : [message];
        }
    }

    //Get all images
    static async getAllImages() {
        let res = await this.request(`images/`)
        console.log(res)
        return res
    }

    //Get an image by id
    static async getImageById(id) {
        let res = await this.request(`images/${id}`)
        console.log(res)
        return res
    }

    //Create an image
    static async uploadAnImage(name) {
        let res = await this.request(`images/`, name)
        console.log(res)
        return res
    }

    //update an image by id
    static async updateImageById(id) {
        let res = await this.request(`images/${id}`, data, "patch")
        console.log(res)
        return res
    }

    //delete an image by id
    static async updateImageById(id) {
        let res = await this.request(`images/${id}`, data, "delete")
        console.log(res)
        return res
    }

}