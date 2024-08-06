import { IsNotEmpty, Length } from 'class-validator'

export class CreateUserBody {
  @IsNotEmpty({
    message: 'Por favor insira seu email para se cadastrar',
  })
  email: string

  @IsNotEmpty({
    message: 'Por favor insira uma senha para se cadastrar',
  })
  @Length(8, 100, {
    message: 'Sua senha deve conter no mínimo 8 caracteres',
  })
  password: string

  role: string
}
