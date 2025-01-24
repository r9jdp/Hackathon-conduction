const axios = require("axios");

(async () => {
  const data = await axios.get(
    "https://api.unsplash.com/search/photos/?page=10&client_id=9gLLQtLHyVCQPhVgcA1U89yenDZ3pszDgEUasBty_ps"
  );
  console.log(data.data.length);
})();
