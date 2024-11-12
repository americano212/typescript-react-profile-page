import React from "react";
import "./App.css";
import ContactsPage from "./pages/contacts.page";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ContactsPage />
    </div>
  );
}

export default App;
