import { useRouter } from 'expo-router'
import { FileText, X } from 'lucide-react-native'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export interface LoanData {
  clientName: string
  equipmentId: string
  loanDate: string
  expectedReturnDate: string
  actualReturnDate?: string
  status: string
  fineAmount: number
}

interface LoanDetailsViewProps {
  loanData: LoanData
}

export function LoanDetailsView({ loanData }: LoanDetailsViewProps) {
  const router = useRouter()

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase()
    if (statusLower.includes('aberto') || statusLower.includes('open')) {
      return '#00c951'
    }
    if (statusLower.includes('atrasado') || statusLower.includes('late')) {
      return '#ff4444'
    }
    if (statusLower.includes('devolvido') || statusLower.includes('returned')) {
      return '#666'
    }
    return '#00c951'
  }

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.back()}
          activeOpacity={0.7}
        >
          <X color={'#FFF'} size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.invoiceContainer}>
        {/* Cabeçalho da Nota Fiscal */}
        <View style={styles.invoiceHeader}>
          <FileText color={'#00c951'} size={32} />
          <Text style={styles.invoiceTitle}>COMPROVANTE DE EMPRÉSTIMO</Text>
          <Text style={styles.invoiceSubtitle}>
            SGEE - Sistema de Gestão de Empréstimos
          </Text>
        </View>

        {/* Linha divisória */}
        <View style={styles.divider} />

        {/* Informações do Cliente */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DADOS DO CLIENTE</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoValue}>{loanData.clientName}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Informações do Equipamento */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DADOS DO EQUIPAMENTO</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>ID do Equipamento:</Text>
            <Text style={styles.infoValue}>{loanData.equipmentId}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Informações de Datas */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PERÍODO DO EMPRÉSTIMO</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data de Empréstimo:</Text>
            <Text style={styles.infoValue}>{loanData.loanDate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data de Devolução Prevista:</Text>
            <Text style={styles.infoValue}>{loanData.expectedReturnDate}</Text>
          </View>
          {loanData.actualReturnDate && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Data Real de Devolução:</Text>
              <Text style={styles.infoValue}>{loanData.actualReturnDate}</Text>
            </View>
          )}
        </View>

        <View style={styles.divider} />

        {/* Status e Multa */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>STATUS E VALORES</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Status:</Text>
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: getStatusColor(loanData.status) },
              ]}
            >
              <Text style={styles.statusText}>{loanData.status}</Text>
            </View>
          </View>
          {loanData.fineAmount > 0 && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Valor da Multa:</Text>
              <Text style={[styles.infoValue, styles.fineAmount]}>
                {formatCurrency(loanData.fineAmount)}
              </Text>
            </View>
          )}
          {loanData.fineAmount === 0 && (
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Valor da Multa:</Text>
              <Text style={styles.infoValue}>Sem multa</Text>
            </View>
          )}
        </View>

        {/* Rodapé da Nota Fiscal */}
        <View style={styles.divider} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Este documento é um comprovante de empréstimo de equipamento.
          </Text>
          <Text style={styles.footerText}>
            Em caso de dúvidas, entre em contato com o suporte.
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}
