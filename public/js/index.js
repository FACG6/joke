// eslint-disable-next-line no-unused-vars
const dataReq = (method, url, callback) => {
  // eslint-disable-next-line no-undef
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const response = JSON.parse(xhr.responseText);
      if (xhr.status === 200) {
        callback(null, response.result);
      } else {
        callback(response.error);
      }
    }
  };
  xhr.open(method, url);
  xhr.send();
};
