export default function pickData({ scope, status, mockId }) {
  if (!scope) {
    throw new Error("scope is required");
  }
  const mock = window.__MOCK_CONFIG__?.mock;
  status = status || "success";
  let res = null;
  const resList = mock[scope];
  if (resList) {
    res = resList.filter((i) => i.status === status);
    if (mockId) {
      res = res.find((i) => i.mockId === mockId);
    } else {
      res = res[0];
    }
  }
  return res;
}
