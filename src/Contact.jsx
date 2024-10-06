import { css } from "@emotion/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Contact() {
  const {
    name: { first, last, title },
    email,
    cell,
    picture,
  } = useLoaderData();

  return (
    <section
      css={css`
        padding: 40px;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('https://www.transparenttextures.com/patterns/asfalt-dark.png'),
          linear-gradient(to bottom right, #007bff, #00d4ff); /* Background pattern + gradient */
        background-size: cover;
        background-blend-mode: overlay; /* Blending the pattern with the gradient */
      `}
    >
      <div
        css={css`
          padding: 24px;
          display: grid;
          grid-template-columns: 250px 1fr;
          column-gap: 24px;
          border: 2px solid #ffffff44; /* Semi-transparent white border */
          border-radius: 12px;
          background-color: rgba(255, 255, 255, 0.85); /* Light, semi-transparent background */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: box-shadow 0.3s ease, transform 0.3s ease;
          width: 80%;
          max-width: 900px;

          &:hover {
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
            transform: translateY(-3px);
          }
        `}
      >
        <section>
          <img
            css={css`
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 12px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            `}
            src={picture.large}
            alt={first}
          />
        </section>
        <article
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 12px;
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: 24px;
              color: #333;
              font-weight: bold;
            `}
          >
            {title} {first} {last}
          </h1>
          <h2
            css={css`
              margin: 0;
              font-size: 18px;
              color: #007bff;
              text-decoration: underline;
            `}
          >
            {email}
          </h2>
          <h3
            css={css`
              margin: 0;
              font-size: 16px;
              color: #003366;
            `}
          >
            {cell}
          </h3>
        </article>
      </div>
    </section>
  );
}
