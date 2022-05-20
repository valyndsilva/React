const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error('Please reload the app!'); // 404 just gives a warning so check response and throw an error
  } catch (err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
};
export default apiRequest;
