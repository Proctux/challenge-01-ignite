import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
  --primary: ${({ theme }) => theme.primary};
  --secondary: ${({ theme }) => theme.secondary};
  --terciary: 	${({ theme }) => theme.terciary};
  --background:${({ theme }) => theme.background};
  --shapes: ${({ theme }) => theme.shapes};
  --text-title: ${({ theme }) => theme.text_title};
  --text: ${({ theme }) => theme.text};
  --text-light: ${({ theme }) => theme.text_light};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 16px "Poppins", Arial, sans-serif;
  color: #121214;
  background: ${({ theme }) => theme.body};

  transition: all 0.5s;
}

input, textarea {
  font-family: "Poppins";
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
}

button, .checkmark {
  cursor: pointer;
}
`;

