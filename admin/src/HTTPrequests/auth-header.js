export default function authHeader(strToken = localStorage.getItem("token")) {
  try {
    // const strToken = localStorage.getItem("token");
    if (Boolean(strToken)) {
      //   const token = JSON.parse(strToken);
      return new Headers({
        Authorization: "Bearer " + strToken,
        "Content-Type": "application/json;charset=utf-8",
      });
    } else {
      return {};
    }
  } catch (err) {}
  {
    return {};
  }
}
