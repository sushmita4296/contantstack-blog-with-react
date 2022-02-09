const Card = (props) => {
  const paragraph = props.hero?.paragraph;
  const heading = props.hero?.heading;
  const SecionImage = props.hero?.SecionImage;
  const button = props.hero?.button;
  // const button = props.hero?.button[0];
  return (
    <>
      <section className="blog section is-medium has-background-primary">
        <div className="columns is-vcentered">
          <div className="column ">
            <h1 className="my-4 has-text-white">{heading}</h1>
            <p className="my-4 has-text-white">{paragraph}</p>
            {<button className="button my-4">{button.title}</button>}
          </div>
          <div className="column">
            <figure className="image is-4by3">
              <img src={SecionImage} />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};
export default Card;