import { useRouter } from 'expo-router'
import {
  ArrowLeft,
  Globe,
  Mail,
  MessageCircle,
  Phone,
} from 'lucide-react-native'
import { Linking, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default function Support() {
  const router = useRouter()

  const handleEmailPress = () => {
    Linking.openURL('mailto:contato@fakesgee.com?subject=Suporte - SGEE App')
  }

  const handlePhonePress = () => {
    Linking.openURL('tel:+5511999999999')
  }

  const handleWebsitePress = () => {
    Linking.openURL('https://fakesgee.com')
  }

  const handleWhatsAppPress = () => {
    Linking.openURL(
      'https://wa.me/5511999999999?text=Olá, preciso de ajuda com o SGEE App'
    )
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.backButton}
        activeOpacity={0.8}
      >
        <ArrowLeft color={'white'} size={24} />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Suporte</Text>
        <Text style={styles.subtitle}>
          Entre em contato conosco para obter ajuda
        </Text>
      </View>

      <View style={styles.contactContainer}>
        <TouchableOpacity
          onPress={handleEmailPress}
          style={styles.contactCard}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <Mail color={'black'} size={32} />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>E-mail</Text>
            <Text style={styles.contactValue}>contato@fakesgee.com</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlePhonePress}
          style={styles.contactCard}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <Phone color={'black'} size={32} />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Telefone</Text>
            <Text style={styles.contactValue}>(11) 99999-9999</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleWhatsAppPress}
          style={styles.contactCard}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <MessageCircle color={'black'} size={32} />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>WhatsApp</Text>
            <Text style={styles.contactValue}>(11) 99999-9999</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleWebsitePress}
          style={styles.contactCard}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <Globe color={'black'} size={32} />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.contactTitle}>Website</Text>
            <Text style={styles.contactValue}>fakesgee.com</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Horário de Atendimento</Text>
        <Text style={styles.infoText}>
          Segunda a Sexta: 9h às 18h{'\n'}
          Sábado: 9h às 13h{'\n'}
          Domingo: Fechado
        </Text>
      </View>
    </ScrollView>
  )
}
