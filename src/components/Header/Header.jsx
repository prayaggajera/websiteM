import * as React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "./Header.css";
import { Link } from "react-router-dom";
import { CssBaseline, AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Box } from "@mui/material";
import HeaderConfig from "../../config/HeaderFooterConfig.json";

const drawerWidth = 280;

function Header(props) {
  const { activeLink, setActiveLink } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {HeaderConfig?.nav_items?.length > 0 &&
          HeaderConfig?.nav_items?.map((item, index) => (
            <>
              <ListItem key={index} disablePadding>
                <Link to={item?.url} className="sidebar-main-text">
                  <ListItemButton>
                    <ListItemText primary={item?.title} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <Divider />
            </>
          ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "red" }}>
        <CssBaseline />
        <AppBar className="navbar1">
          <Toolbar className="navbar">
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "0px 20px",
                height: "80px",
              }}
            >
              <Link to="/" onClick={() => setActiveLink("/")}>
                <img
                  src={require(`../../assets/${HeaderConfig?.logo}`)}
                  alt="logo"
                  className="logo"
                  width="80px"
                  height="80px"
                />
              </Link>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon className="menu-icon" />
              </IconButton>
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                {HeaderConfig?.nav_items?.length > 0 &&
                  HeaderConfig?.nav_items?.map((item, index) => (
                    <Box
                      key={index}
                      sx={{ color: "#fff", display: "block", padding: "0 10px" }}
                      className="header-button"
                    >
                      <Link
                        to={item?.url}
                        className={
                          activeLink === item?.url
                            ? "header-button-link-active"
                            : "line header-button-link"
                        }
                        onClick={() => setActiveLink(item?.url)}
                      >
                        {item?.title}
                      </Link>
                    </Box>
                  ))}
              </Box>
            </Stack>
          </Toolbar>
        </AppBar>

        <nav>
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                color: "red",
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default React.memo(Header);
