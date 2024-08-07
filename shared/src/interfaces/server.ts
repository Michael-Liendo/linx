export interface IReply {
  '2xx': {
    success: boolean;
    message: string;
    data: unknown;
  };
  400: {
    success: boolean;
    message: string;
    errors: IError[];
  };
  500: {
    success: boolean;
    message: string;
    errors?: IError[];
  };
}

export interface IError {
  code: string;
  path: string;
  message: string;
}
