interface ApiResponse {
  data: any;
  error: {
    isError: boolean;
    errorMsg: string;
  };
}
export default ApiResponse;
