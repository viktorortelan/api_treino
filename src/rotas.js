import turmaController from "./controller/turmaController.js";
import alunosController from "./controller/alunosController.js";

export default function addRota(servidor) {
    servidor.use(turmaController);
    servidor.use(alunosController);
}