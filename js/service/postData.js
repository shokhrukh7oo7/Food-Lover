// form data

const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: data,
  });

  if (!res.ok) {
    throw new Error(`Ошибка сети: ${res.status}`);
  }

  return await res.json();
};

export default postData;
