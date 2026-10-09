function CountryCard({ name, capital, population, region }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
    </article>
  );
}
export default CountryCard;
