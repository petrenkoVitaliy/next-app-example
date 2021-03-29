import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv();

export const validateResponse = <T>(validationSchema: JSONSchemaType<T>) => (response: any) => {
  const validate = ajv.compile(validationSchema);

  if (validate(response)) {
    return response;
  } else {
    throw new Error(JSON.stringify(validate.errors));
  }
};

export const validateModel = <T>(validationSchema: JSONSchemaType<T>) => (response: any) => {
  const validate = ajv.compile(validationSchema);
  const parsedResponse = JSON.parse(JSON.stringify(response));

  if (validate(parsedResponse)) {
    return parsedResponse;
  } else {
    throw new Error(JSON.stringify(validate.errors));
  }
};
