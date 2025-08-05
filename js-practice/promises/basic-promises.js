const fetch = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
      const success = true;
      if (success) res("Data fetched!");
      else rej("Fetch failed!");
    }, 1000);
    })
}

fetch()
  .then((data) => console.log("Success:", data))
  .catch((err) => console.log("Error:", err))
  .finally(() => console.log("Fetch attempt done."));