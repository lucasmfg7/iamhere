import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'
import { styles } from './styles'

export default function Home() {
  const participants = [
    "Lucas",
    "Jonatas",
    "Kayky",
    "Abner",
    "Bruno",
    "Lamarca",
    "Rafael",
    "Lucio",
    "João",
    "Pedro",
    "Paulo",
    "Matheus",
  ];

  function handleParticipantAdd() {
    if (participants.includes("Lucas")) {
      return Alert.alert(
        "Participante existente",
        "Já existe um participante com esse nome"
      );
    }
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado"),
      },
    ]);
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

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={handleParticipantRemove}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? :(
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
      />
    </View>
  );
}
