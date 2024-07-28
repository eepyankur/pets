import PetList from "../components/PetList.tsx";
import SearchForm from "../components/SearchForm.tsx";

function Home() {
  return (
    <>
      <SearchForm />
      <PetList />
    </>
  );
}

export default Home;
