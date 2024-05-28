import "./index.css";

const errorTemplate = `
    <section id="error_container">
        <div id="error_inner_container">
            <div id="notfound_container">
                <h1>페이지를 찾을 수 없습니다.</h1>
            </div>
        </div>
    </section>
`;

const errorComponent = () => {
  const main = document.getElementById("main");
  main.innerHTML = errorTemplate;
};

export default errorComponent;
