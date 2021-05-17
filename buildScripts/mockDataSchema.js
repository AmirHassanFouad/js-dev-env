// to be used by json-schema-faker => go explore to https://github.com/json-schema-faker/json-schema-faker
// to know  how to create schema
export const schema = {
  type: "object",
  properties: {
    users: {
      type: "array",
      minItems: 3,
      maxItems: 5,
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",

            minimum: 1,
          },
          firstName: {
            type: "string",
            faker: "name.firstName",
          },
          lastName: {
            type: "string",
            faker: "name.lastName",
          },
          email: {
            type: "string",
            faker: "internet.email",
          },
        },
        required: ["id", "firstName", "lastName", "email"],
      },
    },
  },
  required: ["users"],
};
