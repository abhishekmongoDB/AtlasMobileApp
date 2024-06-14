// import { getAuth } from "../../app/modules/auth";

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
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE",
  body: any = null,
  headers: Record<string, string> = {},
  callback?: (data: any | null, error: Error | null) => void
): Promise<any> {
  try {

    // console.log("window.location.hostname"+window.location.hostname )
    let options: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    };

    if (
      body &&
      (method === "POST" ||
        method === "PUT" ||
        method === "PATCH" ||
        method === "DELETE")
    ) {
      options.body = JSON.stringify(body);
    }
    if (method === "GET" && body) {
      console.warn("Body for GET/DELETE request is usually not required");
    }

    const response = await fetch(url, options);



    if (response.status === 401) {
      console.log("Unauthorized");
      return response;
    }


    if (!response.ok) {
      const errorResponse = await response.json(); 
      throw errorResponse;
    }
    const data = await response.json(); // Parse the response body once

    callback?.(data, null);
    return data;
  } catch (error: any) {
    callback?.(null, error);
    throw JSON.stringify(error?.message);
  }
}