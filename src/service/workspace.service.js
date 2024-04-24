export const workspaceService = async (userInfo) => {
  const res = await fetch("http://110.74.194.123:8989/api/todo/v1/workspaces", {
    method: "POST",
    body: JSON.stringify(userInfo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  console.log("Data: ", data);
  return data;
};
