import { cityFactory } from '@factory/city-factory'
import { City } from 'src/protocols/city'

const city: City = {
  nome: 'any_name',
  estado: 'any_state'
}

describe('City Controller Tests', () => {
  const cityController = cityFactory()
  it('Deve cadastrar uma cidade', async () => {
    const result = await cityController.create(city)
    expect(result).toHaveProperty('id')
  })

  it('Deve buscar uma cidade pelo id', async () => {
    const cidadeCadastrada = await cityController.create(city)
    const buscarCidade = await cityController.find(cidadeCadastrada.id)
    expect(buscarCidade.id).toEqual(cidadeCadastrada.id)
  })

  it('Deve buscar uma cidade pelo nome', async () => {
    const cidadeCadastrada = await cityController.create(city)
    const [buscarCidade] = await cityController.findCityByName(cidadeCadastrada.nome)
    expect(buscarCidade.nome).toEqual(cidadeCadastrada.nome)
  })

  it('Deve buscar uma cidade pelo estado', async () => {
    const cidadeCadastrada = await cityController.create(city)
    const [buscarCidade] = await cityController.findCityByState(cidadeCadastrada.estado)
    expect(buscarCidade.estado).toEqual(cidadeCadastrada.estado)
  })

  it('Deve falhar ao atualizar uma cidade inexistente', async () => {
    const cidadeCadastrada = await cityController.create(city)
    const cidadeAtualizada = await cityController.update(cidadeCadastrada.id, { nome: 'any_name_updated' })
    expect(cidadeAtualizada.nome).toEqual('any_name_updated')
  })

  it('Deve atualizar uma cidade', async () => {
    try {
      await cityController.update('any_id', { nome: 'any_name_updated' })
    } catch (error) {
      expect(error.message).toEqual('City not found')
    }
  })

  it('Deve remover uma cidade', async () => {
    const cidadeCadastrada = await cityController.create(city)
    expect(await cityController.delete(cidadeCadastrada.id)).toBeUndefined()
  })
})
