import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Nav, TitleNav } from "../styles/styles";

import keys from "./login/assets/llave-del-hotel.png";
import avatar from "./assets/avatar.png";

import { TbArrowsLeftRight } from "react-icons/tb";
import { RiDashboardLine } from "react-icons/ri";
import { BiKey } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { RiUser3Line } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { authContext } from "../App";
import { Box, Modal } from "@mui/material";
import { ButtonSendForm, FormLogin } from "./login/styles/styles";

export const AsideMenu = styled.aside`
  a {
    text-decoration: none;
    color: #799283;
  }

  background: #ffffff;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 10px;
  width: 345px;
  height: 1900px;
  z-index: 2;
`;

export const LogoAsideMenu = styled.div`
  background-image: url(${keys});
  bacground-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin: auto;
  width: 60px;
  height: 60px;
`;

export const BoxLogoAside = styled.div`
  display: flex;
  flex-direction: row;
  height: 90px;
  margin-bottom: 20px;
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  height: 80px;
  width: 200px;
  text-align: left;
  margin-left: -15px;

  h3 {
    font-size: 20px;
  }

  h6 {
    color: #5d5449;

    font-size: 10px;
    font-weight: 300;
  }
`;

export const ListItemsMenu = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;

  button {
    margin: auto;
    margin-top: 20px;
    width: 100%;
    height: 67px;
    background-color: transparent;
    font-size: 18px;
    text-align: left;
    color: #799283;
    border: none;

    svg {
      margin-right: 20px;
      margin-left: 40px;
    }

    &:hover {
      color: #e23428;
      cursor: pointer;
      font-weight: 500;
      border-left: 5px solid #e23428;
      border-radius: 3px;

      a {
        color: #e23428;
      }
    }
  }

  button:focus {
    color: #e23428;

    a {
      color: #e23428;
    }

    svg {
      color: #e23428;
    }
  }
`;

export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 20px 30px #dcdcdc;
  border-radius: 18px;
  margin: auto;
  margin-top: 20px;
  width: 233px;
  height: 230px;

  h2 {
    font-size: 20px;
    font-weight: 300;
  }
  h6 {
    font-weight: 300;
    font-size: 10px;
    color: #b2b2b2;
  }
  h2,
  h6 {
    text-align: center;
  }
`;

export const IconUser = styled.div`
  background-image: url(${avatar});
  bacground-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin: auto;
  left: 138px;
  width: 70px;
  height: 70px;
`;

export const ButtonEdit = styled.button`
  background-color: #ebf1ef !important;
  border: none !important;
  border-radius: 8px !important;
  color: #135846 !important;
  margin: auto !important;
  width: 158px !important;
  height: 47px !important;
  text-align: center !important;

  &:hover {
    cursor: pointer !important;
    background-color: #135846 !important;
    color: white !important;
    transition: 0.5s ease !important;
  }
`;

export const FooterAside = styled.div`
  text-align: center;
  margin-top: 35px;

  h2 {
    font-size: 16px;
  }

  h6 {
    color: #799283;
    font-size: 12px;
    font-weight: 300;
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



export const Navbar = () => {
  const { authenticated, dispatchAuthenticated } = useContext(authContext);

  const [open, setOpen] = useState<boolean>(false);
  const [navbarSmaller, setNavbarSmaller] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
    setNavbarSmaller(!navbarSmaller);
  };

  const handleOpen = () => {
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpenEdit(false);
  };


  if (authenticated.authenticated) {
    return (
      <>
        {!navbarSmaller ? (
          <Nav>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TbArrowsLeftRight
                onClick={handleClick}
                // TODO: arreglar => open={open} 
                
              />
              <TitleNav>Dashboard</TitleNav>
            </div>

            <div className="nav__icons">
              <HiOutlineMail />
              <IoMdNotificationsOutline />
              <FiLogOut
                onClick={(e) => {
                  dispatchAuthenticated({ type: "logout" });
                }}
              />
            </div>
          </Nav>
        ) : (
          <Nav>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "300px",
              }}
            >
              <TbArrowsLeftRight
                onClick={handleClick}
                open={open}
                style={{
                  fontSize: "25px",
                  margin: "auto",
                  marginLeft: "60px",
                  cursor: "pointer",
                }}
              />
              <TitleNav>Dashboard</TitleNav>
            </div>

            <div className="nav__icons">
              <HiOutlineMail />
              <IoMdNotificationsOutline />
              <FiLogOut />
            </div>
          </Nav>
        )}

        {open && (
          <AsideMenu>
            <BoxLogoAside>
              <LogoAsideMenu />
              <BoxText>
                <h3>travl</h3>
                <h6>Hotel Admin Dashboard</h6>
              </BoxText>
            </BoxLogoAside>
            <ListItemsMenu>
              <button>
                <RiDashboardLine />
                <Link to="/"> Dashboard </Link>
              </button>
              <button>
                <BiKey />
                <Link to="/rooms"> Rooms </Link>
              </button>
              <button>
                <AiOutlineSchedule />
                <Link to="/bookings"> Bookings </Link>
              </button>

              <button>
                <RiUser3Line />
                <Link to="/users"> Users </Link>
              </button>
              <button>
                <TiContacts />
                <Link to="/contacts"> Contacts </Link>
              </button>
              <BoxUser>
                <IconUser />
                <h2>Belén Jaraba</h2>
                <h6>belen@miranda.com</h6>

                <ButtonEdit onClick={handleOpen}>Edit</ButtonEdit>
              </BoxUser>
            </ListItemsMenu>
            <FooterAside>
              <h2>Travl Hotel Admin Dashboard</h2>
              <h6>© 2020 All rights Reserved</h6>
            </FooterAside>
          </AsideMenu>
        )}

        {openEdit && (
          <div>
            <Modal
              open={openEdit}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <FormLogin>
                  <label>New User</label>
                  <input
                    name="uname"
                    placeholder="Insert your username"
                    type="text"
                    value={authenticated.username}
                    onChange={(e) =>
                      dispatchAuthenticated({
                        type: "changeUsername",
                        username: e.target.value,
                      })
                    }
                  />
                  <label>New Email</label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Insert your email"
                    value={authenticated.email}
                    onChange={(e) =>
                      dispatchAuthenticated({
                        type: "changeEmail",
                        email: e.target.value,
                      })
                    }
                  />

                  <ButtonSendForm type="submit">Save</ButtonSendForm>
                </FormLogin>
              </Box>
            </Modal>
          </div>
        )}
      </>
    );
  }
};
