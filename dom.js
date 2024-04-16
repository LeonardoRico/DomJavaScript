import { createHeader } from "./header.js";
import { createBuscador } from "./seccionBuscador.js";
import { createInfo } from "./seccionInfo.js";
import { creatFooter } from "./footer.js";

document.body.appendChild(createHeader());
document.body.appendChild(createBuscador('Encuentra tu destino ideal'));
document.body.appendChild(createInfo());
document.body.appendChild(creatFooter());