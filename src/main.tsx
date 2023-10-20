import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
console.log(
  ".__   __.   ______        ______  __    __   _______     ___   .___________. __  .__   __.   _______ \n" +
    "|  \\ |  |  /  __  \\      /      ||  |  |  | |   ____|   /   \\  |           ||  | |  \\ |  |  /  _____|\n" +
    "|   \\|  | |  |  |  |    |  ,----'|  |__|  | |  |__     /  ^  \\ `---|  |----`|  | |   \\|  | |  |  __  \n" +
    "|  . `  | |  |  |  |    |  |     |   __   | |   __|   /  /_\\  \\    |  |     |  | |  . `  | |  | |_ | \n" +
    "|  |\\   | |  `--'  |    |  `----.|  |  |  | |  |____ /  _____  \\   |  |     |  | |  |\\   | |  |__| | \n" +
    "|__| \\__|  \\______/      \\______||__|  |__| |_______/__/     \\__\\  |__|     |__| |__| \\__|  \\______| \n" +
    "                                                                                                     ",
);
console.log("Executing javascript in the console doesn't count!");
console.log("So get back in the app!");
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
