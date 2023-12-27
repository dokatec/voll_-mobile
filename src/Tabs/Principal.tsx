import { VStack, Text, ScrollView, Image, Divider, Box } from 'native-base';

import { Titulo } from '../components/Titulo';
import { EntradaTexto } from '../components/EntradaTexto';
import { Botao } from '../components/Botao';
import Logo from '../assets/Logo.png';
import { depoimentos } from '../utils/mock';

export default function Principal() {
    return (
        <ScrollView flex={1} backgroundColor="white">
            <VStack flex={1} alignContent='flex-start' alignItems='flex-start' p={5}>
                <Image source={Logo} alt="Logo" mt={10} />
                <Titulo color='blue.500'>Boas-vindas!</Titulo>
                <Box width="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md" >
                    <EntradaTexto placeholder='Digite a especialidade' />
                    <EntradaTexto placeholder='Digite sua localização' />
                    <Botao marginTop={3} marginBottom={3}>Buscar</Botao>
                </Box>
                <Titulo color='blue.800' alignSelf="center">Depoimentos</Titulo>
                <VStack space={3} divider={<Divider />} width="100%">
                    {
                        depoimentos.map(depoimento => (<Box key={depoimento.id} width="100%"
                            borderRadius="lg" p={3}>
                            <Text color="gray.300" fontSize="md" textAlign="justify">
                                {depoimento.text}
                            </Text>
                            <Text color="gray.500" fontSize="lg" fontWeight="bold"
                                alignSelf="center" mt="2">
                                {depoimento.titulo}
                            </Text>
                        </Box>))
                    }
                </VStack>
            </VStack>
        </ScrollView>
    )
}