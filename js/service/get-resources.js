// with async/await
// async function getResources() {
//   const response = await fetch("./data/db.json");
//   const data = await response.json();
//   return data;
// }

// export default getResources;
// =====================================
// with try/catch
async function getResources() {
  try {
    const response = await fetch("./data/db.json");
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getResources