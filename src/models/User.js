export default {
  labels: ["User"],
  "id": {
      type: "uuid",
      primary: true
  },
  "uid": {
      type: "string",
      unique: true,
      required: true
  },
  "name": "string",
  "email": "string",
}
