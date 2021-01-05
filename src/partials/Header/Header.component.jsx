import "./Header.style.scss";

const Header = () => (
  <div className="header__container">
    <div className="links__container">
      <div className="header__link header__link--primary">mishmash</div>
      <div className="header__link">Shop</div>
    </div>
    <div className="links__container">
      <div className="header__link">Cart</div>
      <div className="header__link header__link--no-effect">Sign In</div>
    </div>
  </div>
);

export default Header;
