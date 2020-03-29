import React from 'react'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import logoImg from '../../assets/logo.png'

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={28} color="#E82041"></Feather>
        </TouchableOpacity>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>Caso:</Text>
          <Text style={styles.incidentValue}>Cachorro atropelado</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$120,00</Text>
        </View>

        <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
          <Text style={styles.heroDescription}>Entre em contato:</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.action} onPress={() => {}}>
              <Text style={style.actionText}>Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.action} onPress={() => {}}>
              <Text style={style.actionText}>E-email</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}