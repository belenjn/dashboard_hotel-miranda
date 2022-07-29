import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contactsList,
  fetchContacts,
} from "../../features/contact/contactSlice";
import { ActiveUser, Box, BoxArchivedContacts, InactiveUser, TableDiv } from "../../styles/styles";

// import { VscError } from "react-icons/vsc";
// import {AiOutlineCheckCircle} from "react-icons/ai";


export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsList);

  const [contactsState, setContactsState] = useState(contacts);

  const archivedContacts = contacts.filter(
    (contact) => contact.archived === true
  );

  const handleClickAllContacts = () => {
    setContactsState(contacts);
  };

  const handleClickArchivedContacts = () => {
    setContactsState(archivedContacts);
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    setContactsState(contacts);
  }, [contacts]);

  return (
    <Box>
      <BoxArchivedContacts>
      <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "50%",

          }}
        >
        <button onClick={handleClickAllContacts}>All contacts</button>
        <button onClick={handleClickArchivedContacts}>Archived</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            width: "23%"

          }}
        >
        
          <select
            style={{
              border: "2px solid #135846",
              color: "#135846",
              borderRadius: 12,
              height: 55,
              width: 120,
              textAlign: "center",
              margin: "auto",
              fontSize: 14,
            }}
          >
            <option>Newest</option>
            <option>Guest</option>
          </select>
        </div>
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
        <thead className="categories">
          <tr>
            <th className="title__id">ID / Date</th>
            <th className="title__customer">Customer</th>
            <th className="title__comment">Comment</th>
            <th className="title__archived">Archived</th>
          </tr>
        </thead>

        {contactsState.map((contact) => (
          < div key={contact._id}>
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
          </div>
        ))}
      </TableDiv>

      {/* <Button>
        <Link to="/contacts/id">Details</Link>
      </Button> */}
    </Box>
  );
};
