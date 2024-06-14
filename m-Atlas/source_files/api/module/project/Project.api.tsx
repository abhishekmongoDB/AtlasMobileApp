import { API_ENDPOINTS } from "../../../constant/API.constant";
import { isFunction } from "../../../utiles/app_utiles/Lodash.utils";
import { fetchRequest } from "../../fetch.Request";

type ProjectListCallback = (
  response: ProjectListResponse | null,
  error: Error | null
) => void;


export async function fetchProjectList(callback?: ProjectListCallback)  : Promise<ProjectListResponse | null | Error>{
    
  try {
    const data = await fetchRequest(
      API_ENDPOINTS.PROJECT_LIST(),
      "GET",
      null,
      {},
      function (response, error) {
        if (error) {
          console.error("getProjectList Error fetching data:", error);
        } else {
          console.log(
            "getProjectList Data fetched successfully:",
            JSON.stringify(response)
          );
        }
      }
    );
    if(callback && isFunction(callback)){
        callback(data, null);
    }
    return data;
    console.log(data);
  } catch (error: any) {
    const errorData = error instanceof Error ? error : new Error(error);
    if(callback && isFunction(callback)){
        callback(null, errorData);
    }

    console.log(error);
    return error;
  }
};
