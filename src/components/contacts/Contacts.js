import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  contactsList,
  fetchContacts,
} from "../../features/contact/contactSlice";
import { Box, Button, Title } from "../../styles/styles";

export const TableDiv = styled.table`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  font-size: 14px;
  margin: auto;
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
    text-align: justify;
    width: 100%;
    margin: auto;
    padding: 10px;
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

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsList);

  useEffect(() => {
    dispatch(fetchContacts());

    /*Hay que ordenar los contactos por fechas */
  }, []);

  return (
    <Box>
      <Title>Contacts</Title>
      {/* Falta la misma vista rápida que debe haber en el dashboard */}
      <BoxArchivedContacts>
        <button>All contacts</button>
        <button>Archived</button>
      </BoxArchivedContacts>

      <TableDiv>
        <thead>
          <tr>
            <th className="title__id">ID / Date</th>
            <th className="title__customer">Customer</th>
            <th className="title__comment">Comment</th>
          </tr>
        </thead>

        {contacts.map((contact) => (
          <tbody key={contact.id} className="column__id">
            <tr className="text">
              <td className="info"># {contact.id}</td>
              <td className="info">
                {new Date(contact.date_subject).toLocaleString("en-GB")}
              </td>
            </tr>
            <tr className="text">
              <td className="info">{contact.name_guest}</td>
              <td className="info">{contact.email_guest}</td>
              <td className="info">{contact.phone_guest}</td>
            </tr>
            <tr className="text">
              <td className="info">{contact.comment}</td>
            </tr>
          </tbody>
        ))}
      </TableDiv>
      {/* Falta poner el botón archive */}
      <Button>
        <Link to="/contacts/id">Details</Link>
      </Button>
    </Box>
  );
};
