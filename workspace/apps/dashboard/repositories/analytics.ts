import http from "@utils/api/http";

class Analytics {
  analytics = async (url: string) => {
    {
      try {
        const response = await http.get(url);
        if (response.status === 200 || response.status === 201) {
          return await response.data;
        }
        throw new Error();
      } catch (error) {
        return {
          error: error.response || error.message,
        };
      }
    }
  };
}

export default new Analytics();
