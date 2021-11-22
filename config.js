const options = {
  mongodb: {
    host: "mongodb://localhost/ecommerce",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
    },
  },
  file: {
    path: "./data",
  },
  firestore: {
    type: "service_account",
    project_id: "ecommerce-yoox",
    private_key_id: "6f6c3607c892c63426307e24a4def69cf3665122",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC5Q0pE3AI5ZqYV\nO6Xkdj7EUrOwvUdakojWAEiuaHZg7ZDlC53XLDPY7fNYfpWwwz6bnaRek1mxCshW\nDHwYqzpScuuUD+kPotLMJ+hXMS7cEdLVAK9+oy8cs/iTC2n/255sRl1DHELCUOmK\nkVzBsbyYbafoGRXcT25VCoT/v2LnU8r2laf0Rzp9guRU0tEtH8gX9aW8Or7xAsay\nUfooXmhyDmSuTRqPWyhtCVeK6BuRA4bSiDCHW95G2iPLVeDyv2R5zkgvR/fUXusv\nYOEXdnmtmnmHp5t4x5dK3Pa4yFSIK8rc8fAEAqEbQkTU+yI9A4XQBHmMP3+pJY8x\nyKGWYml/AgMBAAECggEASlFWD716HvCwmz/sUnOkxjiu4K1tXEYAImjGv0AkjMmA\nIIHCdbjDq7f4sH1HKzuHeAGLGG1fw4ehyfMELRkzMjPrkN+5DI6ypTc1GxUdySZV\nPyEhRVnM4mTHyKUBhqPhL2oiq3NAzJaMuQuK/CCCmVsTyiWWAWTTy8WGiNmLoWPq\n360NyFxyhrWD4kjoXdy/OJVY7fQJOzp5E4+tY0KtYvS6v+52weFp8Pu/CvP/DKb9\nM74DK7JbqsMDKD3uOyY+0C8TEGrMpeKYbWaAStXNvoVhnpsCvZCStRLQHdMkAvU5\nKEYjmO4FfPxhzCxUxs4fro3V7BRLnmdTYJdK+ll1EQKBgQDit9a4nvksQqYhHVnr\nPhhFhhxqcME93IfRd32xZC3YMdyP8Vc+DdG0n17SdfIrxrI6IDQ1dSmbKqEwQ8NX\nNzGf0FS7Rb9moDVvymZwt50FfXYeKViEVrK2yHnuZtpWyVX3JZI8Q0uLrM+XYIVt\nqo2WNHUT6Q7+Hoi/paqtC9bjMwKBgQDRMMhsrjnU8UP+hTCKuXFJxHVyLrNVbIyt\nYsjmzCyBoOgj4OFO9S2mBphFfSloyF6kNePQmUe13bNpUnkFY4+KcmGBizKOCsjr\n5u0t7o/aFBs9vzX5T6jxg7dAKxqDSP+8fMe4R7NhHwye19v/rSv3AGgmbBKnVfZS\nAwGBn0gghQKBgQCCBW6GKN27zWlbGmskJ1NiI9yOCqY4ZQ4bSgzyvAIyt73Ha2Be\nPSykCrYluvCsvGIgRbHLaqr2ywbwGByiGwxBnAfL8t8m6wBaYVhIknTh3ibse0fB\ndbs+alDLMX9MQGElwQ1RtEJSE0RmiztaPnK+zszKI2GuyTIhvs/YOC7/0wKBgBd1\nJfRx8RA84cgHvXLA6sA/5H+iVv/MRVYoDqk62f7LQVzMmddVzQGiGa8pItyaI2q8\nlEhO9+if7L9xvRpqmK0IuIBjUI73DKLPaWdOKhllScy5xV6onSRABeuPKdDw/aRw\nRaEXgTjx12N0hzn7fEOdaxBr7AeRryZxKdkUOG1VAoGAHx+sYxbS+hNXyZ0Z3agS\nbGYsk7MQeqx73XN/a41VfQLOaaf3av6yI2s1GHErJqGfHulx5coL1GouIBArtndL\nT3r56c4XHpNT7ovjcKQDf6XOo89KsEmlJPIwo+pVdQ7MtCWCDC/5TCpFdcMwzdKw\nCGo0F3rciHUDw/4lBcUGjlk=\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-qho79@ecommerce-yoox.iam.gserviceaccount.com",
    client_id: "117078591864575496542",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qho79%40ecommerce-yoox.iam.gserviceaccount.com",
  },
  mysql: {},
  sqlite: {},
};

module.exports = options;
