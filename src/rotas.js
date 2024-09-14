import turmaController from "./controller/turmaController.js";

export default function addRota(servidor) {
    servidor.use(turmaController);
}