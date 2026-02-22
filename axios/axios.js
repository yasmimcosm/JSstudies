import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000"
})

export default api

//GET
import api from "./api"

export async function listarTarefas() {
  try {
    const response = await api.get("/tarefas")
    return response.data
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error)
  }
}

const tarefas = await listarTarefas()
console.log(tarefas)

//POST
export async function criarTarefa(descricao) {
  try {
    const response = await api.post("/tarefas", {
      descricao,
      completa: false
    })

    return response.data
  } catch (error) {
    console.error("Erro ao criar tarefa:", error)
  }
}

await criarTarefa("Estudar React")


//PUT
export async function atualizarTarefa(id, dadosAtualizados) {
  try {
    const response = await api.put(`/tarefas/${id}`, dadosAtualizados)
    return response.data
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error)
  }
}

await atualizarTarefa(1, {
  descricao: "Estudar React avançado",
  completa: true
})

//DELETE
export async function deletarTarefa(id) {
  try {
    await api.delete(`/tarefas/${id}`)
    console.log("Tarefa deletada com sucesso")
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error)
  }
}

await deletarTarefa(1)