const Footer = (props) => {
  const logoUrl = props.footer?.logoUrl;
  const copyrightText = props.footer?.copyrightText;
  const menu = props.footer?.menu;

  return (
    <>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>{copyrightText}</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
