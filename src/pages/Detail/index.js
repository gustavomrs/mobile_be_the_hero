import React from 'react'
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from 'expo-mail-composer'


import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail() {
  const navigation = useNavigation()
  const route = useRoute()

  const incident = route.params.incident
  const message = `Hello ${incident.name}, I'm entering in contact because I would like to help the case "${incident.title}" with a contribution of ${Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(incident.value)}`

  function navigateBack(params) {
    navigation.goBack()
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Heroi do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E82041"></Feather>
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>NGO:</Text>
        <Text style={styles.incidentValue}>{incident.name} from {incident.city}/{incident.uf}</Text>

        <Text style={styles.incidentProperty}>Title:</Text>
        <Text style={styles.incidentValue}>{incident.title}</Text>

        <Text style={styles.incidentProperty}>Description:</Text>
        <Text style={styles.incidentValue}>{incident.description}</Text>

        <Text style={styles.incidentProperty}>Budget:</Text>
        <Text
              style={styles.incidentValue}
            >
            {Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(incident.value)}
            </Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Save the day!</Text>
        <Text style={styles.heroTitle}>Be the hero of this incident.</Text>
        <Text style={styles.heroDescription}>Enter in contact:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>Whatsapp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}