import axios from "./authorizedAxios";
import errorHandler from "./errorHandler";
import successHandler from "./successHandler";

const request = {
  create: async ({ entity, jsonData }) => {
    try {
      const response = await axios.post(entity, jsonData);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  createAndUpload: async ({ entity, jsonData }) => {
    try {
      const response = await axios.post(entity, jsonData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  read: async ({ entity, id }) => {
    try {
      const response = await axios.get(entity + "/" + id);
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  readEntityItems: async ({ entity, id, subEntity }) => {
    try {
      const response = await axios.get(`${entity}/${id}/${subEntity}`);
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  addEntityItems: async ({ entity, id, subEntity, jsonData }) => {
    try {
      const response = await axios.post(
        `${entity}/${id}/${subEntity}`,
        jsonData
      );
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  removeEntityItems: async ({ entity, id, subEntity, jsonData }) => {
    try {
      const response = await axios.post(
        `${entity}/${id}/${subEntity}`,
        jsonData
      );
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  update: async ({ entity, id, jsonData }) => {
    try {
      const response = await axios.patch(entity + "/" + id, jsonData);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  updateAndUpload: async ({ entity, id, jsonData }) => {
    try {
      const response = await axios.patch(entity + "/" + id, jsonData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  delete: async ({ entity, id }) => {
    try {
      const response = await axios.delete(entity + "/" + id);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  filter: async ({ entity, options = {} }) => {
    try {
      let filter = options.filter ? "filter=" + options.filter : "";
      let equal = options.equal ? "&equal=" + options.equal : "";
      let query = `?${filter}${equal}`;

      const response = await axios.get(entity + "/filter" + query);
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  search: async ({ entity, options = {} }) => {
    try {
      let query = "?";
      for (var key in options) {
        query += key + "=" + options[key] + "&";
      }
      query = query.slice(0, -1);
      // headersInstance.cancelToken = source.token;
      const response = await axios.get(entity + query);

      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  getRef: async ({ entity }) => {
    try {
      const response = await axios.get(entity + "/getRef");

      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  list: async ({ entity, options = {} }) => {
    try {
      let query = "?";
      for (var key in options) {
        query += key + "=" + options[key] + "&";
      }
      query = query.slice(0, -1);

      const response = await axios.get(entity + query);
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  listAll: async ({ entity, options = {} }) => {
    try {
      let query = "?";
      for (var key in options) {
        query += key + "=" + options[key] + "&";
      }
      query = query.slice(0, -1);

      const response = await axios.get(entity + "/listAll" + query);

      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  post: async ({ entity, jsonData }) => {
    try {
      const response = await axios.post(entity, jsonData);

      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  get: async ({ entity }) => {
    try {
      const response = await axios.get(entity);
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
  patch: async ({ entity, jsonData }) => {
    try {
      const response = await axios.patch(entity, jsonData);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  upload: async ({ entity, id, jsonData }) => {
    try {
      const response = await axios.patch(entity + "/" + id, jsonData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  uploadFile: async ({ entity, id, formData }) => {
    try {
      const response = await axios.post(
        `${entity}/${id}/upload-file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  deleteFile: async ({ entity, fileId }) => {
    try {
      const response = await axios.delete(`/${entity}/${fileId}/delete-file`);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  downloadFile: async ({ entity, fileId }) => {
    try {
      const response = await axios.get(`/${entity}/${fileId}/download-file`, {
        responseType: "blob",
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Download failed.");
    }
  },

  summary: async ({ options = {} }) => {
    try {
      let query = "?";
      for (var key in options) {
        query += key + "=" + options[key] + "&";
      }
      query = query.slice(0, -1);
      const response = await axios.get("summary" + query);

      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: false,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  mails: async ({ entity, jsonData }) => {
    try {
      const response = await axios.post(entity + "/mails/", jsonData);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  convert: async ({ entity, id }) => {
    try {
      const response = await axios.get(`${entity}/convert/${id}`);
      successHandler(response, {
        notifyOnSuccess: true,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },

  translate: async ({ jsonData }) => {
    try {
      const response = await axios.post("lang/translate", jsonData);
      successHandler(response, {
        notifyOnSuccess: false,
        notifyOnFailed: true,
      });
      return response.data;
    } catch (error) {
      return errorHandler(error);
    }
  },
};
export default request;
