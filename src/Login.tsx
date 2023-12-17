import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Titulo } from './components/Titulo';
import Logo from './assets/Logo.png';
import { Botao } from './components/Botao';
import { EntradaTexto } from './components/EntradaTexto';


export default function Login() {

   return (
        <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
            <Image source={Logo} alt='Logo Voll' />
            <Titulo>
                Faça login em sua conta
            </Titulo>
            <Box>
                <EntradaTexto label='Email' placeholder='Insira seu endereço de e-mail' />
                <EntradaTexto label='Senha' placeholder='Insira sua senha' />
            </Box>
            <Botao> Entrar </Botao>
            <Link href='https://www.alura.com.br' marginTop={2}>Esqueceu sua senha?</Link>
            <Box w="100%" flexDirection="row" justifyContent="center" marginTop={5} >
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color="blue.500"> Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>

        </VStack>
    );
}

