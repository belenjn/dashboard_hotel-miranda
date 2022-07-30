import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  contactsList,
  fetchContacts,
} from "../../features/contact/contactSlice";
import {
  ActiveUser,
  Box,
  BoxArchivedContacts,
  InactiveUser,
  TableDiv,
} from "../../styles/styles";

// import { VscError } from "react-icons/vsc";
// import {AiOutlineCheckCircle} from "react-icons/ai";

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsList);

  const [contactsState, setContactsState] = useState([]);
  const [order, setOrder] = useState("newest");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  useEffect(() => {
    const orderKeys = {
      newest: "contact_date",
      guest: "contact_name",
    };

    const orderedFilterContact = contacts.filter((contact) =>
      contact.archived.toString().includes(filter)
    );
    orderedFilterContact.sort((a, b) => {
      if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else {
        return 0;
      }
    });
    setContactsState(orderedFilterContact);
  }, [contacts, order, filter]);

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
          <button onClick={() => setContactsState(contacts)}>
            All contacts
          </button>
          <button onClick={() => setFilter("true")}>Archived</button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "right",
            width: "23%",
          }}
        >
          <select
          value={order}
          onChange={(e) => setOrder(e.target.value)}
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
          <div key={contact._id}>
            <tbody key={contact._id} className="column__id">
              <tr className="text text__id">
                <td className="info"># {contact._id}</td>
              </tr>
              <tr className="text text__customer">
                <td className="info">{contact.contact_name}</td>
                <td className="info">{contact.contact_email}</td>
                <td className="info">{contact.contact_phone}</td>
              </tr>
              <tr className="text">
                <td className="info">{contact.comment}</td>
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
    </Box>
  );
};
