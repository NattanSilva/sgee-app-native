import { ClockAlert, ListEnd } from 'lucide-react-native'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

const cards = [
  {
    id: 1,
    date: '17-11-2025',
    price: 25,
    status: 'Open',
  },
  {
    id: 2,
    date: '24-11-2025',
    price: 16,
    status: 'Open',
  },
  {
    id: 3,
    date: '30-11-2025',
    price: 45,
    status: 'Open',
  },
  {
    id: 4,
    date: '12-12-2025',
    price: 12.99,
    status: 'Open',
  },
  {
    id: 5,
    date: '07-12-2025',
    price: 24.65,
    status: 'Open',
  },
  {
    id: 6,
    date: '16-12-2025',
    price: 32.9,
    status: 'Open',
  },
]

export function LoansList() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Opening Loans</Text>
        <TouchableOpacity style={styles.seeAllBtn}>
          <Text style={styles.seeAllButtonText}>See all</Text>
          <ListEnd color={'#666'} size={12} />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.listContent}
        style={styles.listContainer}
      >
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            activeOpacity={0.7}
            style={[
              styles.cardContainer,
              card.date.includes('17-11') && {
                borderColor: 'orange',
              },
            ]}
          >
            <View style={styles.cardDateContainer}>
              <ClockAlert color={'#FFF'} size={16} />
              <Text style={styles.cardTitle}>{card.date}</Text>
            </View>
            <Text style={styles.cardPrice}>R$ {card.price.toFixed(2)}</Text>
            <Text style={styles.cardStatus}>{card.status}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}
