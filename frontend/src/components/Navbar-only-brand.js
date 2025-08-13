
const NavbarOnlyBrand = () => {
    return (
            <>
              <nav className="navbar" style={{justifyContent: "center",padding: "50px 0 20px 0",}}>
                <div className="navbar-brand">
                  <a href="/">
                    <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd4jbXkWaYRcqw7zkFheo1YSlmlUSaEZyQFw&s"
                      alt="App Logo"
                      className="navbar-logo"
                    />
                  </a>
                </div>
              </nav>
            </>
          
    );
}
export default NavbarOnlyBrand;