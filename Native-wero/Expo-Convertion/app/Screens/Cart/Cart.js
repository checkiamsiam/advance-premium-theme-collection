import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CheckoutItem from '../../components/CheckoutItem';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import Header from '../../layout/Header';
import pic1 from '../../assets/images/product/pic1.jpg';
import pic2 from '../../assets/images/product/pic2.jpg';
import pic3 from '../../assets/images/product/pic3.jpg';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CustomButton from '../../components/CustomButton';

const CheckoutData = [
  {
    image: pic1,
    title: 'Peter England Causual',
    type: 'Printed Longline Pure Cotteon T-shirt',
    quantity: 1,
    price: '$158.2',
    oldPrice: '$170',
  },
  {
    image: pic2,
    title: 'Peter England Causual',
    type: 'Printed Longline Pure Cotteon T-shirt',
    quantity: 1,
    price: '$158.2',
    oldPrice: '$170',
  },
  {
    image: pic3,
    title: 'Peter England Causual',
    type: 'Printed Longline Pure Cotteon T-shirt',
    quantity: 1,
    price: '$158.2',
    oldPrice: '$170',
  },
];

const Cart = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.backgroundColor,
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <Header
        backAction={() => navigation.navigate('Home')}
        title={'Cart'}
        leftIcon={'back'}
        rightIcon={'more'}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderColor: COLORS.borderColor,
        }}
      >
        <Image
          style={{
            height: 35,
            width: 35,
            borderRadius: 20,
            marginRight: 10,
          }}
          source={IMAGES.user}
        />
        <Text
          style={{
            ...FONTS.fontSm,
            ...FONTS.fontBold,
            color: COLORS.title,
            flex: 1,
          }}
        >
          Deliver to Yatin
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              ...FONTS.fontSm,
              ...FONTS.fontBold,
              color: COLORS.primary,
            }}
          >
            Ram krishan, puram
          </Text>
          <FeatherIcon
            color={COLORS.primary}
            style={{ marginLeft: 2, top: 1 }}
            size={16}
            name="chevron-down"
          />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {CheckoutData.map((data, index) => (
            <CheckoutItem
              onPress={() =>
                navigation.navigate('ProductDetail', {
                  item: {
                    imagePath: data.image,
                    title: data.title,
                    price: data.price,
                    oldPrice: data.oldPrice,
                  },
                  category: 'Fashion',
                })
              }
              key={index}
              image={data.image}
              title={data.title}
              type={data.type}
              quantity={data.quantity}
              price={data.price}
              oldPrice={data.oldPrice}
            />
          ))}
          <View style={GlobalStyleSheet.container}>
            <Text
              style={{ ...FONTS.fontSm, ...FONTS.fontBold, marginBottom: 6 }}
            >
              Have a coupon code ? enter here
            </Text>
            <View>
              <FeatherIcon
                style={{ position: 'absolute', left: 18, top: 16 }}
                size={18}
                color={COLORS.primary}
                name="scissors"
              />
              <TextInput
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                  borderWidth: 1,
                  borderColor: COLORS.borderColor,
                  borderRadius: 8,
                  paddingHorizontal: 18,
                  paddingLeft: 50,
                  borderStyle: 'dashed',
                }}
                defaultValue="B2GET150"
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 0,
                  padding: 13,
                }}
              >
                <FeatherIcon
                  size={22}
                  color={COLORS.title}
                  name="chevron-right"
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
                marginTop: 12,
              }}
            >
              <Text style={{ ...FONTS.font }}>Price : </Text>
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                $158.2
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ ...FONTS.font }}>Tax : </Text>
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                0.5%
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text style={{ ...FONTS.font }}>Delivery Fee :</Text>
              <Text
                style={{
                  ...FONTS.font,
                  ...FONTS.fontBold,
                  color: COLORS.title,
                }}
              >
                0.5%
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 10,
                marginTop: 5,
                alignItems: 'center',
                borderTopWidth: 1,
                borderStyle: 'dashed',
                borderColor: COLORS.borderColor,
                paddingTop: 8,
              }}
            >
              <Text style={{ ...FONTS.font }}>Total : </Text>
              <Text style={{ ...FONTS.h4, color: COLORS.primary }}>$215.5</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 15,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderColor: COLORS.borderColor,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ ...FONTS.h4 }}>$215.5</Text>
          <TouchableOpacity
            style={{
              marginTop: -4,
            }}
          >
            <Text
              style={{
                ...FONTS.fontXs,
                color: COLORS.primary,
                ...FONTS.fontBold,
              }}
            >
              View price details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <CustomButton
            btnSm
            onPress={() => navigation.navigate('AddDeliveryAddress')}
            title="Checkout"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Cart;
