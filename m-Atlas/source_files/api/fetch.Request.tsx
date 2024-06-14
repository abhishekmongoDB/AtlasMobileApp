// import { getAuth } from "../../app/modules/auth";

import { Alert } from "react-native";
import { BaseURL } from "../constant/API.constant";
import DigestClient from "digest-fetch";
import { isFunction } from "../utiles/app_utiles/Lodash.utils";

/**
 * A function to send HTTP requests.
 *
 * @param url - The URL to send the request to.
 * @param method - The HTTP method ('GET', 'POST', 'PUT', 'PATCH', 'DELETE').
 * @param body - The body of the request. Should be null for 'GET' and 'DELETE'.
 * @param headers - Optional headers for the request.
 * @param callback - An optional callback function that is called with the result or error.
 * @returns A Promise that resolves to the response.
 */

export async function fetchRequest(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body: any = null,
  headers: Record<string, string> = {},
  callback: (data: any | null, error: Error | null)  => void
): Promise<any> {
  try {
    const client = new DigestClient(
      customAuthHeader.digestAuthUsername,
      customAuthHeader.digestAuthPassword
    );

    const response = await client.fetch(BaseURL + endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept-Encoding": "bzip, deflate",  // Ensure the server supports these or consider using more common encodings like gzip
        Accept: "application/vnd.atlas.2023-01-01+json",
        ...headers,
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();  // Attempt to parse error response body
      throw new Error(`Failed to fetch: ${response.status} - ${errorResponse.detail}`);
    }

    const data = await response.json();
    if (typeof callback === 'function') {
      callback(data, null);
    }
    return data;

    // client
    //   .fetch(BaseURL + endpoint, {
    //     method: method,
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Accept-Encoding": "bzip, deflate",
    //       Accept: "application/vnd.atlas.2023-01-01+json",
    //       ...headers,
    //     },
    //   })
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json(); // Convert the response to JSON only if the request was successful
    //     } else {
    //       throw new Error("Failed to fetch: " + res.status); // Handle HTTP errors
    //     }
    //   })
    //   .then((data) => {
    //     if (isFunction(callback)) {
    //       callback(data, null);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching data:", error); // Catch and log any errors
    //   });

    // const encodedCredentials = btoa(`${customAuthHeader.digestAuthUsername}:${customAuthHeader.digestAuthPassword}`);

    // // console.log("window.location.hostname"+window.location.hostname )
    // let options: RequestInit = {
    //   method: method,
    //   headers: {
    //     "Content-Type": "application/json",
    //     'Accept-Encoding': 'bzip, deflate',
    //     'Authorization': `Basic ${encodedCredentials}`,
    //     ...headers,
    //   },
    // };

    // if (
    //   body &&
    //   (method === "POST" ||
    //     method === "PUT" ||
    //     method === "PATCH" ||
    //     method === "DELETE")
    // ) {
    //   options.body = JSON.stringify(body);
    // }
    // if (method === "GET" && body) {
    //   console.warn("Body for GET/DELETE request is usually not required");
    // }

    // const response = await fetch(BaseURL + endpoint, options);

    // if (response.status === 401) {
    //   console.log("Unauthorized");
    //   return response;
    // }

    // if (!response.ok) {
    //   const errorResponse = await response.json();
    //   throw errorResponse;
    // }
    // const data = await response.json(); // Parse the response body once

    // callback?.(data, null);
    // return data;
  } catch (error: any) {
    callback?.(null, error);
    throw JSON.stringify(error?.message);
  }
}
interface CustomAuthHeader {
  digestAuthPassword: string;
  digestAuthUsername: string;
}

export const customAuthHeader: CustomAuthHeader = {
  digestAuthPassword: "8988af3c-3cc6-4c0c-bb05-fe1618884c66",
  digestAuthUsername: "pvlybfis",
};
