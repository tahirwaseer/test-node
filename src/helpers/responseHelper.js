export default (response) => ({
  response: {
    result: response.result,
    errors: response.errors
  }
})