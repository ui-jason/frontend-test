import { useEffect, useState } from "react";

export function Results({ result, showTable}) {
  const [data, setData] = useState();

  useEffect(() => {
    if (result) {
      setData(result.amiibo);
    }
  }, [result]);

  return (
    <>
      {console.log("Result:")}
      {console.log(data)}
      {showTable && data !== undefined && data.length > 0 && (
        <table>
          <thead>
            <tr>
              <td>Character</td>
              <td>Amiibo Series</td>
              <td>Image</td>
            </tr>
          </thead>
          <tbody>
            {/* Just show the first 10 results, so we don't spam their api too much */}
            {data.slice(0,9).map((item) => {
              return (
                <tr key={Math.floor(Math.random() * 10000000)}>
                  <td>{item.character}</td>
                  <td>{item.amiiboSeries}</td>
                  <td>
                    <img src={item.image} alt="amiibo" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
}
