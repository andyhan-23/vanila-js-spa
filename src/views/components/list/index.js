import "./index.css";
import formatDate from "./format-date";

const listTemplate = `
<main>
    <div id="list_container">
        <div id="list_inner_container">
            <div id="title_container">
                <h1>개발</h1>
            </div>
            <ul id="article_list_container"></ul>
        </div>
    </div>
</main>  
`;

const listContainerRender = () => {
  const main = document.getElementById("main");
  main.innerHTML = listTemplate;
};

const articleTemplate = (list, id) => `
<article>
    <div id="article_img_container">
        <img src="${list[id].thumbnail_image}" />
    </div>
    <section>
        <div id="article_title_container">
            <h1>${list[id].title}</h1>
        </div>
        <div id="article_summary_container">
            <p>${list[id].summary}</p>
        </div>
        <div id="article_created_container">
            <p>${formatDate(list[id].created_date)}</p>
        </div>
    </section>
</article>
`;

const listComponent = list => {
  listContainerRender();
  const listArr = Object.values(list);
  listArr.reduceRight((acc, value) => {
    const li = document.createElement("li");
    li.id = value.id;
    li.innerHTML = articleTemplate(list, value.id);
    acc.appendChild(li);
    return acc;
  }, document.getElementById("article_list_container"));
};

export default listComponent;
