import { css } from "@emotion/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

export default function ContactList({ searchText }) {
  const contacts = useLoaderData() ?? [];

  const filteredContacts = contacts.filter((contact) => {
    const { first, last } = contact.name;
    return (
      first.toLowerCase().includes(searchText.toLowerCase()) || last.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <section
      css={css`
        padding: 16px;
        min-height: 100vh;
        background: 
          radial-gradient(circle at top left, rgba(0, 123, 255, 0.9), transparent 90%), 
          radial-gradient(circle at bottom right, rgba(0, 212, 255, 0.9), transparent 90%);
        
      `}
    >
      <ul
        css={css`
          list-style: none;
          padding: 0;
          margin: 0;
        `}
      >
        {filteredContacts?.length
          ? filteredContacts.map((contact) => {
              const {
                id: { value },
                name: { first, last },
              } = contact;
              return (
                <li
                  key={value}
                  css={css`
                    margin-bottom: 12px;
                    padding: 12px;
                    border-radius: 8px;
                    background-color: rgba(255, 255, 255, 0.9); 
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    transition: background-color 0.3s ease-in-out;
                    &:hover {
                      background-color: lightGrey;
                    }
                  `}
                >
                  <NavLink
                    css={css({
                      display: "block",
                      padding: "10px 16px",
                      textDecoration: "none",
                      color: "#333",
                      fontSize: "16px",
                      fontWeight: "500",
                      transition: "color 0.3s ease",
                      borderRadius: "8px",
                      "&.active": {
                        backgroundColor: "royalblue",
                        color: "#fff",
                      },
                    })}
                    to={`/contacts/${value}`}
                  >{`${first} ${last}`}</NavLink>
                </li>
              );
            })
          : <p>No contacts found.</p>}
      </ul>
    </section>
  );
}
