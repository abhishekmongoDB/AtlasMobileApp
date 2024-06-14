
export const BaseURL  = 'https://cloud.mongodb.com/'

// Define a type for the API endpoint functions
type FetchDetailByIdFunction = (arg: string) => string;
// type FetchCreatorOfferingListFunction = (id: string, page: number) => string;
// type FetchCouponCodeFunction = (id: string, code: string) => string;
// type FetchPostFunction = (isAddToCart: boolean) => string;
type FetchNoParamFunction = () => string;


/**
 * API_ENDPOINTS represents the endpoints for various API calls.
 */
export const API_ENDPOINTS: {
    PROJECT_LIST:  FetchNoParamFunction;
  
  } = {
    PROJECT_LIST: (): string => `api/atlas/v2/groups?envelope=false&includeCount=true&itemsPerPage=100&pageNum=1&pretty=false`,
  };
  