const Header = (props) => {
  const url = props.header?.logoUrl;
  const menu = props.header?.menu;

  const renderMenuList = () => {
    return (
      menu &&
      menu.map((menuItem) => {
        return (
          <a className="navbar-item" href={menuItem.href}>
            {menuItem.title}
          </a>
        );
      })
    );
  };

  return (
    <>
      <nav className="navbar mx-6" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="">
            <img src={url} width="112" height="28" />
          </a>

          <a
            role="button"
            className="navbar-burger navbar-end "
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu is-size-6">
          <div className="navbar-end">{renderMenuList()}</div>
        </div>
      </nav>
    </>
  );
};
export default Header;
