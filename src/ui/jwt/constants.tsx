export const EXPLAIN_MAPS: Record<string, string> = {
  sub: "Subject (the user the token refers to)",
  iat: "Issued At (timestamp when the token was issued)",
  exp: "Expiration Time (timestamp when the token expires)",
  alg: "Algorithm (signing algorithm used)",
  typ: "Type (type of the token, usually JWT)",
  iss: "Issuer (who issued the token)",
  aud: "Audience (who the token is intended for)",
  nbf: "Not Before (token is not valid before this time)",
  jti: "JWT ID (unique identifier for the token)",
};
