import { clientFactory } from '@factory/client-factory'
import { Client } from 'src/protocols/client'

const client: Client = {
  nome: 'any_name',
  cidade: 'any_city',
  idade: 20,
  nascimento: 'any_nascimento',
  sexo: 'any_sexo',
  sobrenome: 'any_sobrenome'
}

describe('City Controller Tests', () => {
  const clientController = clientFactory()
  it('Deve cadastrar um cliente', async () => {
    const result = await clientController.create(client)
    expect(result).toHaveProperty('id')
  })

  it('Deve buscar um cliente pelo id', async () => {
    const clienteCadastrado = await clientController.create(client)
    const buscarCidade = await clientController.find(clienteCadastrado.id)
    expect(buscarCidade.id).toEqual(clienteCadastrado.id)
  })

  it('Deve buscar um cliente pelo nome', async () => {
    const clienteCadastrado = await clientController.create(client)
    const [buscarCidade] = await clientController.findClientByName(clienteCadastrado.nome)
    expect(buscarCidade.nome).toEqual(clienteCadastrado.nome)
  })

  it('Deve atualizar um cliente ', async () => {
    const clienteCadastrado = await clientController.create(client)
    const cidadeAtualizada = await clientController.update(clienteCadastrado.id, { nome: 'any_name_updated' })
    expect(cidadeAtualizada.nome).toEqual('any_name_updated')
  })

  it('Deve falhar ao atualizar um cliente inexistente', async () => {
    try {
      await clientController.update('any_id', { nome: 'any_name_updated' })
    } catch (error) {
      expect(error.message).toEqual('Client not found')
    }
  })

  it('Deve remover um cliente', async () => {
    const clienteCadastrado = await clientController.create(client)
    expect(await clientController.delete(clienteCadastrado.id)).toBeUndefined()
  })
})
