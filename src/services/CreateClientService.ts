import { injectable, inject } from 'tsyringe';
import Client from '../entities/Client';
import IClientRepository from '../dtos/IClientRepository';
import ICreateClient from '../dtos/ICreateClient';

@injectable()
class UpdateAvatarService {
  constructor(
    @inject('ClientRepository')
    private clientRepository: IClientRepository,
  ) {}

  public async execute({
    nome,
    email,
    dataDeNascimento,
  }: ICreateClient): Promise<Client> {
    const isUser = await this.clientRepository.findByEmail(email);
    if (isUser) throw new Error('email already in use');

    const client = await this.clientRepository.create({
      nome,
      email,
      dataDeNascimento,
    });

    return client;
  }
}

export default UpdateAvatarService;
