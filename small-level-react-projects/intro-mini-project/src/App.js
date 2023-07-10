import "./App.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <Bio />
    </div>
  );
}

function Avatar() {
  return <img src="./k5O0-jonas.jpeg" alt="" />;
}

function Bio() {
  return (
    <div className="bio-container">
      <main className="mainBio">
        <h2>Jonas Schmedtmann</h2>
        <p className="bio">
          Full-stack web developer and teacher at Udemy.When not coding or
          preparing a course, I like to play board games, to cook (and eat), or
          to just enjoy the Portugese sun at the beach.
        </p>
        <Skills />
      </main>
    </div>
  );
}

function Skills() {
  return (
    <div className="skills">
      <Pills color="blue" name="HTML+CSS" />
      <Pills color="yellow" name="JavaScript" />
      <Pills color="lightgreen" name="Web Design" />
      <Pills color="red" name="Git and Github" />
      <Pills color="lightblue" name="React" />
      <Pills color="red" name="Svelte" />
    </div>
  );
}

function Pills({ color, name }) {
  const style = {
    display: "inline-block",
    backgroundColor: color,
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: "14px",
    padding: "1px 5px 1px 5px",
  };
  return (
    <span className="pills" style={style}>
      {name}
    </span>
  );
}
