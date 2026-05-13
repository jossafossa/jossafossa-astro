import { useState } from "react";
import { Toggle } from "../Toggle";

export const DarkModeToggle = () => {
  const [darkmode, setDarkMode] = useState<boolean>(false);

  return <Toggle data-darkmode checked={darkmode} onChange={setDarkMode} />;
};
