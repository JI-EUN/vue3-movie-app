exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "ZingZZi",
      age: 94,
      email: "ggg@gmail.com",
    }),
  };
};
