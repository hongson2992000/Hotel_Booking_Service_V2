import axios from "axios";
import { DOMAIN, TOKEN } from "../util/constant/settingSystem";

export class BaseServices {
  put = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  delete = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  get = (url, model) => {
    return axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOlt7ImF1dGhvcml0eSI6IlJPTEVfQURNSU4ifSx7ImF1dGhvcml0eSI6IlJPTEVfVVNFUiJ9XSwiaWF0IjoxNjY0MzMwMzE1LCJleHAiOjE2NjQzMzM5MTV9.arB5QCSnc8Zy1Alrx1W0whEhp00iDDcJP8p_fHjz56g",
      },
    });
  };
}
