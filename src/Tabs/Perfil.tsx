import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';

import { Titulo } from '../components/Titulo';


export default function Perfil() {
    return (
        <ScrollView>
            <VStack flex={1} alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{ uri: "https://github.com/dokatec.png" }}
                    mt={5} />
                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg">Jhonatan Pacheco</Titulo>
                <Text>19/07/1990</Text>
                <Text>São Paulo</Text>

                <Divider mt={5} />

                <Titulo color="blue.500" marginBottom={1}>Histório médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )
}