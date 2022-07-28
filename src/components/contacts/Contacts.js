import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  contactsList,
  fetchContacts,
  // getContact,
  // newContact,
  // updateContact,
} from "../../features/contact/contactSlice";
import { Box } from "../../styles/styles";
import { ActiveUser, InactiveUser } from "../users/Users";

// import { VscError } from "react-icons/vsc";
// import {AiOutlineCheckCircle} from "react-icons/ai";

// import { deleteContacts } from "../../features/contact/contactSlice";

export const TableDiv = styled.table`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  margin: auto;
  margin-top: 30px;
  width: 95%;

  thead {
    width: 1300px;
  }

  thead tr {
    display: grid;
    grid-template-column: repeat(3, 1fr);
    font-size: 20px;
    text-align: center;
  }

  tr {
    display: flex;
    justify-content: space-betweeen;
    width: 100%;
  }

  .text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    width: 100%;
    padding: 15px;
  }

  .text__customer,
  .text__id {
    text-align: center;
  }

  .title__id {
    display: grid;
    grid-column: 1;
  }

  .title__customer {
    display: grid;
    grid-column: 2;
  }

  .title__comment {
    display: grid;
    grid-column: 3;
  }

  .title__archived {
    display: grid;
    grid-column: 4;
  }

  .info {
    padding: 5px;
  }
  th {
    padding: 10px;
  }

  tbody {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const BoxArchivedContacts = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 20px;
  margin-bottom: 40px;
  margin-left: 20px;
  width: 35%;
  height: 70px;

  button {
    border: none;
    background: none;
    color: #135846;
    font-size: 16px;
    padding: 7px;
    margin-right: 80px;
    width: 300px;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #135846;
    }
  }
`;

export const BoxForMessages = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  width: 70%;
`;

export const BoxContactsMessages = styled.div`
  background-color: white;
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 20px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 431px;
  height: 275px;

  div > p {
    padding: 25px;
    color: #4e4e4e;
    text-align: left;
    font-size: 16px;
  }

  div > h5 {
    color: #262626;
    text-align: left;
    font-size: 16px;
  }

  div > h6 {
    color: #799283;
    font-size: 14px;
    font-weight: 300;
  }

  .image__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
  }
`;

export const ImageContacts = styled.div`
  background-color: #c5c5c5;
  border-radius: 8px;
  width: 56px;
  height: 56px;
`;

export const IconsDiv = styled.div`
  display: flex;
  justify-content: right;
  margin: auto;
  width: 120px;

  .error__icon {
    color: red;
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  .check__icon {
    color: #5ad07a;
    width: 28px;
    height: 24px;
  }
`;

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsList);


  const [contactsState, setContactsState] = useState(contacts);

  const archivedContacts = contacts.filter((contact) => contact.archived === true);

  const handleClickAllContacts = () => {
    setContactsState(contacts);
  };

  const handleClickArchivedContacts = () => {
    setContactsState(archivedContacts);
  };


  useEffect(() => {
    dispatch(fetchContacts(contactsState));
  }, [contactsState]);


  return (
    <Box>
      <BoxArchivedContacts>
        <button onClick={handleClickAllContacts}>All contacts</button>
        <button onClick={handleClickArchivedContacts}>Archived</button>
      </BoxArchivedContacts>

      {/* <BoxForMessages>
        <BoxContactsMessages>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <div className="image__container">
              <ImageContacts />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px"
                }}
              >
                <h5>Probando contacto</h5>
                <h6>4m ago</h6>
              </div>
              <IconsDiv>
                <VscError className="error__icon" />
                <AiOutlineCheckCircle className="check__icon"/>
              </IconsDiv>
            </div>
          </div>
        </BoxContactsMessages>
      </BoxForMessages>


     */}

      <TableDiv>
        <thead>
          <tr>
            <th className="title__id">ID / Date</th>
            <th className="title__customer">Customer</th>
            <th className="title__comment">Comment</th>
            <th className="title__archived">Archived</th>
          </tr>
        </thead>

        {contacts.map((contact) => (
          <>
            <tbody key={contact._id} className="column__id">
              <tr className="text text__id">
                <td className="info"># {contact._id}</td>
                {/* <td className="info">
                  {new Date(contact.date_subject).toLocaleString("en-GB")}
                </td> */}
              </tr>
              <tr className="text text__customer">
                <td className="info">{contact.contact_name}</td>
                <td className="info">{contact.contact_email}</td>
                <td className="info">{contact.contact_phone}</td>
              </tr>
              <tr className="text">
                <td className="info">{contact.comment}</td>
                {/* <button onClick={() => dispatch(deleteContacts(contact))}>
                  Delete Contact
                </button>
                <button
                  onClick={() =>
                    dispatch(getContact(contact), console.log(contact))
                  }
                >
                  Get Contact
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      updateContact({ ...contact, name_guest: "Lola Pérez" }),
                      console.log(contact)
                    )
                  }
                >
                  Update Contact
                </button> */}
              </tr>
              <tr className="text">
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {contact.archived === true ? (
                    <ActiveUser>Archived</ActiveUser>
                  ) : (
                    <InactiveUser>Not Archived</InactiveUser>
                  )}
                </td>
              </tr>
            </tbody>
          </>
        ))}
      </TableDiv>

      {/* <Button>
        <Link to="/contacts/id">Details</Link>
      </Button> */}
    </Box>
  );
};
