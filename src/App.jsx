import { TwFollowCard } from "./TwFollowCard";
import "./App.css";

const App = () => {
  return (
    <section className="App">
      <TwFollowCard userName="Pharelm">Mark Stump</TwFollowCard>
      <TwFollowCard userName="Dorem">Rizzle</TwFollowCard>
      <TwFollowCard userName="Magazine">Poeml</TwFollowCard>
      <TwFollowCard userName="stbborn">Stubborn</TwFollowCard>
    </section>
  );
};

export default App;
