import * as dynamose from 'dynamoose'
import { Document } from 'dynamoose/dist/Document'

export interface ClientModel extends Document {
  id: string
  nome: string
  sobrenome: string
  sexo: string
  nascimento: string
  idade: number
  cidade: string
  createdAt: string
  updatedAt: string
}

const ClientSchema = new dynamose.Schema({
  id: {
    hashKey: true,
    type: String
  },
  nome: {
    type: String,
    required: true
  },
  sobrenome: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  nascimento: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  cidade: {
    type: String,
    required: true
  }
}, {
  saveUnknown: false,
  timestamps: true
})
const createTable = process.env.NODE_ENV === 'test'
export const client = dynamose.model<ClientModel>(process.env.CLIENT_TABLE, ClientSchema, { create: createTable })
