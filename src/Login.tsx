import { VStack, Image, Text, Box, FormControl, Input, Button, Link } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Logo from './assets/Logo.png';


export default function Login() {
    return (
        <VStack flex={1} alignItems="center" justifyContent="center" padding={5}>
            <Image source={Logo} alt='Logo Voll' />
            <Text
                fontSize="2xl"
                fontWeight="bold"
                color="gray.500"
                textAlign="center"
                marginTop={5}
            >
                Faça login em sua conta
            </Text>
            <Box>
                <FormControl mt={3}>
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
                        placeholder='Insira seu endereço de email'
                        size='lg'
                        width="100%"
                        borderRadius='lg'
                        backgroundColor='gray.100'
                        shadow={3} />
                </FormControl>
                <FormControl marginTop={3}>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        placeholder='Insira a sua senha'
                        size='lg'
                        width='100%'
                        borderRadius='lg'
                        backgroundColor='gray.100'
                        shadow={3}
                    />
                </FormControl>
            </Box>
            <Button
                width="100%"
                backgroundColor="blue.800"
                marginTop={10}
                borderRadius="lg">Entrar
            </Button>
            <Link href='https://www.alura.com.br'>Esqueceu sua senha?</Link>
            <Box w="100%" flexDirection="row" justifyContent="center" marginTop={5} >
                <Text>Ainda não tem cadastro? </Text>
                <TouchableOpacity>
                    <Text color="blue.500"> Faça seu cadastro!</Text>
                </TouchableOpacity>
            </Box>

        </VStack>
    );
}

