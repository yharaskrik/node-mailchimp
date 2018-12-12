// export as namespace mailchimpApiV3;


export = Mailchimp;

declare class Mailchimp {
    /**
     *
     * @param api
     * @param type defaulted to 'api_key' in index.js file as to not break prior node-mailchimp implementations
     * @param dc The region or 'dc' of the api. This will be set using the same method for api_keys as before but is
     * required for any OAuth implementations
     */
  constructor(api: string, type?: string, dc?: string)

  get(
    pathOrOptions: PathOrOptions,
    query?: Query,
  ): Promise<any>;
  get(
    pathOrOptions: PathOrOptions,
    query?: Query,
    callback?: Callback,
  ): void;
  get(
    pathOrOptions: PathOrOptions,
    callback?: Callback,
  ): void;

  post(
    pathOrOptions: PathOrOptions,
    body?: Body,
  ): Promise<any>;
  post(
    pathOrOptions: PathOrOptions,
    body?: Body,
    callback?: Callback,
  ): void;
  post(
    pathOrOptions: PathOrOptions,
    callback?: Callback,
  ): void;

  patch(
    pathOrOptions: PathOrOptions,
    body?: Body,
  ): Promise<any>;
  patch(
    pathOrOptions: PathOrOptions,
    body?: Body,
    callback?: Callback,
  ): void;
  patch(
    pathOrOptions: PathOrOptions,
    callback?: Callback,
  ): void;

  put(
    pathOrOptions: PathOrOptions,
    body?: Body,
  ): Promise<any>;
  put(
    pathOrOptions: PathOrOptions,
    body?: Body,
    callback?: Callback,
  ): void;
  put(
    pathOrOptions: PathOrOptions,
    callback?: Callback,
  ): void;

  delete(
    pathOrOptions: PathOrOptions,
  ): Promise<any>;
  delete(
    pathOrOptions: PathOrOptions,
    callback?: Callback,
  ): void;

  request(
    options: Options,
  ): Promise<any>;
  request(
    options: Options,
    callback?: Callback,
  ): void;

  batch(...args: any[]): any
}

type Path = string;
type Options = {};

type PathOrOptions = Path | Options;

type Query = string;
type Callback = Function;

type QueryOrCallback = Query | Callback;

type Body = {}
type BodyOrCallback = Body | Callback;
