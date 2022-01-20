import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Searchbar from "./components/Searchbar";
// import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
// import Filter from "./components/Filter";

class App extends Component {
//   state = {
//     contacts: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   };


// componentDidMount() {
//     const parsedContacts = JSON.parse(localStorage.getItem("contacts"));
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//     }
//   }
render(){
    return (           
            <>
            < Searchbar />
            </>   
      );
}
}


export default App;
