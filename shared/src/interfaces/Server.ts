export interface IReply {
  '2xx': {
    message: string;
    data: unknown;
  };
  400: {
    error: string;
    message: string;
  };
  500: {
    error: string;
    message: string;
  };
}
