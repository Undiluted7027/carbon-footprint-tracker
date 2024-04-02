const firebaseConfig  = require("../firebase");

const VerifyToken = async (request, response, next) => {
    
    // console.log("Request Headers:", request.headers);
  const token = request.headers.authorization.split(" ")[1];

  try {
    const decodeValue = await firebaseConfig.auth.verifyIdToken(token);
    if (decodeValue) {
      request.user = decodeValue;
      return next();
    }
  } catch (e) {
    console.log(e.message);
    return response.json({ message: "Internal Error" });
  }
};

module.exports = VerifyToken;