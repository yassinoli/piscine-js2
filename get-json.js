async function getJSON(path, params) {
  let url = path;

  if (params) {
    url = `${path}?${new URLSearchParams(params).toString()}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  if (data.data) {
    return data.data;
  } else {
    if (data.error) {
      throw new Error(data.error);
    }
  }
}

