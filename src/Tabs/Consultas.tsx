import { VStack, Text, Divider, ScrollView } from 'native-base';
import CardConsulta from '../components/CardConsulta';
import { Titulo } from '../components/Titulo';
import { Botao } from '../components/Botao';


export default function Consultas() {
    return (
        <ScrollView p="5">
            <Titulo color="blue.500">Minhas consultas</Titulo>
            <Botao marginTop="5" marginBottom="5">Agendar nova consulta</Botao>
            <Titulo color="blue.500" fontSize='lg' alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
            <CardConsulta
                nome="Dr. Jhonatan Pacheco"
                especialidade='Cardiologista'
                foto='https://github.com/dokatec.png'
                data='20/04/2023'
                foiAgendado

            />
            <Divider mt={5} />

            <Titulo color="blue.500" fontSize='lg' alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
            <CardConsulta
                nome="Dr. Jhonatan Pacheco"
                especialidade='Cardiologista'
                foto='https://github.com/dokatec.png'
                data='20/04/2023'
                foiAtendido

            />

            <Divider mt={5} />

            <CardConsulta
                nome="Dr. Jhonatan Pacheco"
                especialidade='Cardiologista'
                foto='https://github.com/dokatec.png'
                data='20/04/2023'
                foiAtendido

            />

            <Divider mt={5} />

            <CardConsulta
                nome="Dr. Jhonatan Pacheco"
                especialidade='Cardiologista'
                foto='https://github.com/dokatec.png'
                data='20/04/2023'
                foiAtendido

            />


        </ScrollView >
    )
}