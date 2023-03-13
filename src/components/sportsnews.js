import { useState, useEffect } from "react";

export default function Sportsnews() {
  const [articles, setarticles] = useState([]);
  const fetchdata = async () => {
    let apiurl =
      "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=381e2704b183499ba83f6a3eb5043cca";
    let fetdata = await fetch(apiurl);

    let parsedata = await fetdata.json();
    setarticles(parsedata.articles);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
   
    null
  );
}
