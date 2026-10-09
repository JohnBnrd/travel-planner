import CountryCard from "./components/CountryCard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CountryCard
          name="Japan"
          capital="Tokyo"
          population={125100000}
          region="Asia"
        />
        <CountryCard
          name="Canada"
          capital="Ottawa"
          population={38900000}
          region="North America"
        />
        <CountryCard
          name="Senegal"
          capital="Dakar"
          population={17300000}
          region="Africa"
        />
      </main>
    </div>
  );
}

export default App;
