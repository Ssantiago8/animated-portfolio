import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
        {/* Logo */}
        <div className="wrapper">
            <span>Santiago Poveda</span>
        <div className="social">
            <a href=""><img src="/facebook.png" alt="" /></a>
            <a href=""><img src="/github.png" alt="" /></a>
            <a href=""><img src="/instagram.png" alt="" /></a>
        </div>
        </div>
    </div>
  )
}

export default Navbar;
