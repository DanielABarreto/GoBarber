export default (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  return next();
};
