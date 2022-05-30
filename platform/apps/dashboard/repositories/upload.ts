import Base from "./base";

class Upload extends Base<any, any> {
  upload = async (url: string, variables: any) => {
    let formData = new FormData();
    variables.forEach((attachment: any) => {
      formData.append("attachment[]", attachment);
    });
    const options = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const response = await this.http(url, "post", formData, options);
    return response.data;
  };
}

export default new Upload();
