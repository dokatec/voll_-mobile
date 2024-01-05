import { Text, Avatar, VStack } from 'native-base';
import { Botao } from './Botao';


interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    foiAgendado?: boolean;
    foiAtendido?: boolean;
}


export default function CardConsulta({
    nome,
    foto,
    data,
    especialidade,
    foiAgendado,
    foiAtendido
}: CardProps) {
    return (
        <VStack width="100%" backgroundColor={foiAgendado ? "white" : "blue.100"} p="5" borderRadius="lg" shadow="2" mb={5}>
            <VStack flexDir="row">
                <Avatar size="lg" source={{ uri: foto }} />
                <VStack paddingLeft="4">
                    <Text fontSize="md" fontWeight="bold">{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>
            <Botao marginTop="4">
                {foiAgendado ? "Cancelar" : "Agendar consulta"}
            </Botao>
        </VStack>
    )
}