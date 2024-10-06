import { useState } from "react";
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import ContactList from "./ContactList";
import { useRef } from "react";

function Header({ onSearch }) {
  const searchElementRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    onSearch(searchElementRef.current.value);
  }

  return (
    <header
      css={css`
        border-bottom: 1px solid #ddd;
        padding: 16px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      `}
    >
      <form
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
        onSubmit={onSubmit}
      >
        <input
          ref={searchElementRef}
          css={css`
            padding: 10px;
            width: 100%;
            max-width: 300px;
            border: 2px solid black;
            border-radius: 4px;
            font-size: 16px;
            margin-right: 10px;
            transition: border-color 0.3s ease;

            &:focus {
              border-color: #007bff;
              outline: none;
            }
          `}
          type="text"
          placeholder="Search contacts..."
        />
        <button
          css={css`
            padding: 10px 20px;
            border: none;
            background-color: #007bff;
            color: white;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;

            &:hover {
              background-color: #0056b3;
            }
          `}
        >
          Search
        </button>
      </form>
    </header>
  );
}

function Sidenav() {
  const [searchText, setSearchText] = useState("");
  function onSearch(text) {
    setSearchText(text);
  }

  return (
    <aside
      css={css`
        border-right: 1px solid #ddd;
        display: grid;
        background-color: #f8f9fa;
        grid-template-rows: auto 1fr; /* Adjusted to make the list take full height */
        height: 100vh;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      `}
    >
      <Header onSearch={onSearch} />
      <section
        css={css`
          padding: 16px;
          overflow-y: auto; /* Ensures the list scrolls if it overflows */
        `}
      >
        <ContactList searchText={searchText} />
      </section>
    </aside>
  );
}


function Contents() {
  return (
    <section
      css={css`
        padding: 20px;
        background-color: #fff;
        height: 100vh;
        overflow-y: auto;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
      `}
    >
      <Outlet />
    </section>
  );
}

export function Layout() {
  return (
    <main
      css={css`
        display: grid;
        grid-template-columns: minmax(250px, 25%) 1fr;
        height: 100vh;
        background-color: #f1f3f5;
      `}
    >
      <Sidenav />
      <Contents />
    </main>
  );
}
