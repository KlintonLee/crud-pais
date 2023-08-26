const listaPaises = [{ id: 1, nome: 'Brasil', continente: 'América do Sul', ddi: 55 }]
const currentId = 1

const createPais = async (request, response) => {
    console.log(request.body)
    const { nome, sigla, continente, ddi } = request.body

    const novoPais = { id:currentId + 1, nome, sigla, continente, ddi }
    listaPaises.push(novoPais)

    return response.status(201).json(novoPais)
}

const listarPaises = async (request, response) => {
    return response.json(listaPaises)
}

const getPaisById = async (request, response) => {
    const { idPais } = request.params

    const paisEncontrado = listaPaises.find(pais => pais.id == idPais)
    if (paisEncontrado) {
        return response.json(paisEncontrado)
    }
    return response.status(404).json({ error: 'País não encontrado' })
}

const getPaisByContinente = async (request, response) => {
    const { continente } = request.params

    const paisEncontrado = listaPaises.find(pais => pais.continente == continente)

    if (paisEncontrado) {
        return response.json(paisEncontrado)
    }
    return response.status(404).json({ error: 'País não encontrado' })
}

const deletePais = async (request, response) => {
    const { idPais } = request.params

    const paisIndex = listaPaises.findIndex(pais => pais.id == idPais)

    if (paisIndex != -1) {
        listaPaises.splice(paisIndex, 1)
        return response.status(204).json()
    }
    
    return response.status(404).json({ error: 'País não encontrado' })
}

module.exports = { createPais, listarPaises, getPaisById, getPaisByContinente, deletePais }
