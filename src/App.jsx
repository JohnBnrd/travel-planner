import CountryCard from "./components/CountryCard";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CountryCard
          name="Japon"
          capital="Tokyo"
          population={125100000}
          region="Asie"
        />
        <CountryCard
          name="Canada"
          capital="Ottawa"
          population={38900000}
          region="Amérique du Nord"
        />
        <CountryCard
          name="Sénégal"
          capital="Dakar"
          population={17300000}
          region="Afrique"
        />
      </main>
    </div>
  );
}

export default App;
