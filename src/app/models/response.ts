/**
 * @interface Response
 * Blueprint for the skills object
 */
export interface Response {
    success: boolean;
    data: {
      token: string,
      email: string
    };
  }