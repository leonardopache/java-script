export default function (req, res) {
  return fetch("https://www.reddit.com/r/javascript.json")
    .then((results) => results.json())
    .then(({ data }) => res.json(data));
}
