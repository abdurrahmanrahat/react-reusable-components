import "./AniWithJs.css";

const AniWithJs = () => {
  const name = "Abdur Rahman";

  const nameArr = name.split("");

  return (
    <div className="main">
      <div className="container">
        {nameArr.map((item, i) => (
          <span className="alphabet" style={{ transitionDelay: `${i * 20}ms` }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AniWithJs;
