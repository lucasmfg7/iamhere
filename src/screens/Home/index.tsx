import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  function handleParticipantAdd() {
    console.log("Adicionar participante");
  }

  function handleParticipantRemove(name: string) {
    console.log("Remover participante");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Segunda, 23 de Janeiro de 2023</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Lucas" onRemove={handleParticipantRemove} />
    </View>
  );
}
