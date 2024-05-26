import HEADER_LOGO from "../../../logo/header/logo-image.png";
import "./index.css";

const headerTemplate = () => {
  `
    <header id="header_container">
        <div id="header_inner_container">
            <a href="/">
                <div id="header_logo_container">
                    <img src="${HEADER_LOGO}" alt="로고 아이콘" />
                </div>
            </a>
        </div>
    </header>
    `;
};

const headerComponent = () => {
  const header = document.getElementById("header");
  header.innerHTML = headerTemplate;
};

export default headerComponent;
