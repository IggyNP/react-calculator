import "../styles/appStyles.css";

export const Signature = () => {
  return (
    <div className="signature">
      <img
        src={require("../images/bongo-cat-meme.gif")}
        id="cat"
        alt="animated-cat"
      />
      <p>IggyNP</p>
    </div>
  );
};
