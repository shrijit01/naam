// Home.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from './theme';
import { TextInput } from 'react-native';

const { width } = Dimensions.get('window');
const productData = {
  products: [
    {
      productName: 'Hair Cut',
      price: 299,
      image:
        'https://images.unsplash.com/photo-1559561850-60a4fbb9231c?q=80&w=400',
      quantities: 5,
    },
    {
      productName: 'Spa Treatment',
      price: 499,
      image:
        'https://images.unsplash.com/photo-1588776814546-4b06d94cdd30?q=80&w=400',
      quantities: 5,
    },
  ],
};

const Home = () => {
  const [count, setCount] = useState(0);
  const [Product, setProduct] = useState(productData.products);
  const [counts, setCounts] = useState(Product.map(() => 0));

  const handleIncrement = index => {
    setCounts(prev => {
      const newCounts = [...prev];
      if (newCounts[index] < Product[index].quantities) {
        newCounts[index] += 1;
      } else {
        alert(`Only ${Product[index].quantities} quantity available`);
      }
      return newCounts;
    });
  };

  const handleDecrement = index => {
    setCounts(prev => {
      const newCounts = [...prev];
      if (newCounts[index] > 0) newCounts[index] -= 1;
      return newCounts;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Search services..."
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
        </View>
        {/* Promo Section */}
        <View style={styles.PROMO}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              'https://images.unsplash.com/photo-1512207724313-a4e675ec79ab?q=80&w=2072',
              'https://images.unsplash.com/photo-1512207855369-643452a63d46?q=80&w=1983',
              'https://images.unsplash.com/photo-1512207643973-fef70e8cb699?q=80&w=1971',
              'https://images.unsplash.com/photo-1557205465-f3762edea6d3?q=80&w=1887',
            ].map((uri, i) => (
              <View key={i} style={styles.promoCard}>
                <Image source={{ uri }} style={styles.promoCardImage} />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Trending Section */}
        <View style={styles.trendingSection}>
          <Text style={styles.sectionHeader}>Trending Services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Product.map((product, index) => (
              <View key={index} style={styles.card}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.cardLeftContainer}
                />
                <View style={styles.cardRight}>
                  <View style={styles.cardRightTop}>
                    <Text style={styles.itemName}>{product.productName}</Text>
                  </View>
                  <View style={styles.footer}>
                    <Text style={styles.price}>₹{product.price}</Text>
                    {counts[index] === 0 ? (
                      <TouchableOpacity
                        style={styles.add}
                        onPress={() => handleIncrement(index)}
                      >
                        <Text style={styles.addText}>+</Text>
                      </TouchableOpacity>
                    ) : (
                      <View style={styles.addDynamic}>
                        <TouchableOpacity
                          style={styles.addDynamicLeft}
                          onPress={() => handleDecrement(index)}
                        >
                          <Text style={styles.subsText}>-</Text>
                        </TouchableOpacity>
                        <View style={styles.addDynamicCenter}>
                          <Text style={styles.addCenterText}>
                            {counts[index]}
                          </Text>
                        </View>
                        <TouchableOpacity
                          style={styles.addDynamicRight}
                          onPress={() => handleIncrement(index)}
                        >
                          <Text style={styles.additionText}>+</Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Suggested Section */}
        {/* Suggested Section */}
        <View style={styles.needContainerOuter}>
          <Text style={styles.sectionHeader}>Suggested For You</Text>
          <View style={styles.gridContainer}>
            {[
              {
                name: 'Salon',
                uri: 'https://www.shutterstock.com/image-photo/beautiful-natural-girl-smiling-rubbing-260nw-2028916445.jpg',
              },
              {
                name: 'Spa',
                uri: 'https://www.shutterstock.com/image-photo/portrait-smiling-beautiful-young-girl-260nw-2029967741.jpg',
              },
              {
                name: 'Hair Studio',
                uri: 'https://www.shutterstock.com/image-photo/portrait-beautiful-young-woman-clean-260nw-2029877105.jpg',
              },
              {
                name: 'Makeup',
                uri: 'https://www.shutterstock.com/image-photo/young-pretty-girl-natural-makeup-260nw-786330910.jpg',
              },
              {
                name: 'Pre Bridal',
                uri: 'https://www.shutterstock.com/shutterstock/photos/2413031679/display_1500/stock-photo-beautiful-brunette-model-girl-with-long-curly-hair-smiling-woman-hairstyle-wavy-curls-2413031679.jpg',
              },
              {
                name: 'Facial',
                uri: 'https://www.shutterstock.com/shutterstock/photos/2344774319/display_1500/stock-photo-photo-of-sweet-girly-adorable-lady-thinking-about-doll-hen-party-occasion-over-pastel-pink-color-2344774319.jpg',
              },
              {
                name: 'Nails',
                uri: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
              {
                name: 'Massage',
                uri: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              },
            ].map((item, i) => (
              <View key={i} style={styles.suggestedItem}>
                <Image
                  source={{ uri: item.uri }}
                  style={styles.suggestedImage}
                />
                <Text style={styles.suggestedText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  PROMO: {
    height: width * 0.5,
    width: '100%',
    paddingVertical: 10,
  },
  promoCard: {
    width: width * 0.7,
    height: '100%',
    borderRadius: theme.borderRadius.sm,
    marginHorizontal: 10,
    backgroundColor: theme.colors.light,
  },
  promoCardImage: {
    width: '100%',
    height: '100%',
    borderRadius: theme.borderRadius.sm,
  },
  trendingSection: {
    marginTop: 20,
  },
  sectionHeader: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: '600',
    color: theme.colors.black,
  },
  card: {
    width: width * 0.8,
    height: 100,
    flexDirection: 'row',
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.borders.gray,
    backgroundColor: '#F5F5F7',
    padding: '5',
  },
  cardLeftContainer: {
    width: '30%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: theme.colors.gray,
  },
  cardRight: {
    width: '70%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  cardRightTop: {
    height: '50%',
  },
  itemName: {
    fontSize: 16,
    color: '#1B1833',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  add: {
    borderRadius: theme.borderRadius.sm,
    borderWidth: 1,
    width: 50,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.black,
  },
  addText: {
    fontSize: 18,
    color: theme.colors.black,
    fontWeight: '500',
  },
  addDynamic: {
    flexDirection: 'row',
    backgroundColor: theme.colors.black,
    borderRadius: theme.borderRadius.sm,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  addDynamicLeft: {
    paddingHorizontal: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  addDynamicCenter: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addCenterText: {
    color: theme.colors.light,
    fontSize: 16,
    fontWeight: '400',
  },
  addDynamicRight: {
    paddingHorizontal: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  additionText: {
    color: theme.colors.light,
    fontSize: 16,
    fontWeight: '900',
  },
  subsText: {
    color: theme.colors.light,
    fontSize: 16,
    fontWeight: '900',
  },
  needContainerOuter: {
    marginTop: 20,
  },
  needContainerInner: {
    flexDirection: 'row',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  gridContainer: {
    paddingTop: '10',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },

  suggestedItem: {
    width: (width - 80) / 4,
    marginBottom: 10,
    borderRadius: theme.borderRadius.sm,
    overflow: 'hidden',
    alignItems: 'center',
  },

  suggestedImage: {
    width: '100%',
    height: (width - 80) / 4,
    borderRadius: theme.borderRadius.sm,
  },

  suggestedText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5,
  },

  searchContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  paddingHorizontal: 10,
  marginTop: 10,
  marginBottom: 10,
},


searchBox: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f1f00f1f1',
  borderRadius: 10,
  paddingHorizontal: 10,
  width: '100%',
  height: 40,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.1,
  shadowRadius: 2,
  elevation: 2,
},

searchInput: {
  flex: 1,
  marginLeft: 8,
  fontSize: 14,
  color: '#000',
},
});

export default Home;
