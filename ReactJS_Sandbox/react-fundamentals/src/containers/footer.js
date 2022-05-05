import React from "react";
import { Footer } from "../components";

export function FooterContainer({length}) {
  const today = new Date();
  return (
    <Footer>
      <Footer.Copyright>
        Copyright &copy; {today.getFullYear()}. {length} List {length===1?"item": "items"}
      </Footer.Copyright>
    </Footer>
  );
}
