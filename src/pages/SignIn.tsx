import { Envelope, Lock } from 'phosphor-react';
import { Button } from '~/components/Button';
import { Checkbox } from '~/components/Checkbox';
import { Heading } from '~/components/Heading';
import { Text } from '~/components/Text';
import { TextInput } from '~/components/TextInput';
import { Logo } from '~/assets/Logo';

import '~/styles/global.css';
import { FormEvent, useState } from 'react';
import axios from 'axios';

const api = axios.create({
  timeout: 30000,
});

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    await api.post('/sessions', {
      email: 'andrelino@email.com',
      password: '123456789',
    });

    setIsUserSignedIn(true);
  }

  return (
    <div
      className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center
      text-gray-100 p-6"
    >
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-8">
        {isUserSignedIn && <Text>Login realizado!</Text>}
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input
              type="password"
              id="password"
              placeholder="******"
              autoCapitalize="off"
              autoComplete="off"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4" onClick={handleSignIn}>
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-6">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
