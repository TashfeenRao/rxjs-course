async function checkError() {
  try {
    JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
}
checkError();
