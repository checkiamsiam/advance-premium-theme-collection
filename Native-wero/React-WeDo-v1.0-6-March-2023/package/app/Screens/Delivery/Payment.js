import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CheckBox from '@react-native-community/checkbox';
import Collapsible from 'react-native-collapsible';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
//import Button from '../../../components/Button/Button';
//import CustomInput from '../../../components/Input/CustomInput';
import discount from '../../assets/images/icons/discount.png';
import cash from '../../assets/images/icons/cash.png';
import card from '../../assets/images/icons/card.png';
import pay from '../../assets/images/icons/pay.png';
import wallet from '../../assets/images/icons/wallet.png';
import bank from '../../assets/images/icons/bank.png';
import personal from '../../assets/images/icons/personal.png';
import gift from '../../assets/images/icons/gift.png';
import phonepe from '../../assets/images/icons/phonepe.png';
import CustomButton from '../../components/CustomButton';
//import DropShadow from 'react-native-drop-shadow';


const Payment = (props) => {
    
    const [paymentOption, setPaymentOption] = useState('');

    const [payActive , setPayActive] = useState('');

    const PhonePeOption = [
        {
            image : phonepe,
            title : "Phone Pe",
        },
        {
            image : phonepe,
            title : "Paytm",
        },
        {
            image : phonepe,
            title : "Enter UPI ID",
        },
    ]

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:COLORS.backgroundColor}}>
                <Header
                    titleLeft
                    leftIcon={'back'}
                    title={'Payment'}
                />

                
                <View
                    style={{
                        flex:1,
                        backgroundColor:COLORS.white
                    }}
                >
                    <ScrollView
                        contentContainerStyle={{flexGrow:1}}
                    >
                        <View style={[GlobalStyleSheet.container]}>
                            <View style={{flexDirection:'row',alignItems:'center',marginBottom:8}}>
                                <Image style={{height:20,width:20,marginRight:10}} source={discount}/>
                                <Text style={{...FONTS.h6}}>Bank Offer</Text>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View style={{
                                    height:3,
                                    width:3,
                                    borderRadius:3,
                                    backgroundColor:COLORS.text,
                                    marginRight:10,
                                    opacity:.5,
                                    marginTop:8,
                                }}/>
                                <Text style={{...FONTS.font,color:COLORS.text}}>10% instant Savings on Citi Credit and Debit Cards on a min spend of Rs 3,0000. TCA</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor: "#eee",
                                paddingHorizontal:15,
                                paddingBottom:10,
                                paddingTop:15,
                            }}
                        >
                            <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.text}}>Payment Options</Text>
                        </View>
                        
                        <View style={{borderBottomWidth:1,borderColor:COLORS.borderColor}}>
                            <TouchableOpacity
                                onPress={() => setPaymentOption(paymentOption === 'Cash' ? '' : 'Cash')}
                                style={[styles.list]}
                            >
                                <Image
                                    style={[styles.listImg,{tintColor:COLORS.title}]}
                                    source={cash}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>Cash On Delivery(Cash/UPI)</Text>
                                <FeatherIcon color={COLORS.title} name={'chevron-down'} size={22} />
                            </TouchableOpacity>
                            <Collapsible collapsed={paymentOption === "Cash" ? false : true}>
                               
                            </Collapsible>
                        </View>

                        <View style={{borderBottomWidth:1,borderColor:COLORS.borderColor}}>
                            <TouchableOpacity
                                onPress={() => setPaymentOption(paymentOption === 'Credit' ? '' : 'Credit')}
                                style={[styles.list]}
                            >
                                <Image
                                    style={[styles.listImg,{tintColor:COLORS.title}]}
                                    source={card}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>Credit / Debit Card</Text>
                                <FeatherIcon color={COLORS.title} name={'chevron-down'} size={22} />
                            </TouchableOpacity>
                            <Collapsible collapsed={paymentOption === "Credit" ? false : true}>
                                <View
                                    style={{
                                        paddingHorizontal:15,
                                        paddingBottom:30,
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:COLORS.text,marginBottom:10}}>Please ensure your card can be used for online transactions.</Text>
                                    <View style={{marginBottom:15}}>
                                        <TextInput
                                            style={GlobalStyleSheet.formControl}
                                            placeholder='Card Number'
                                            placeholderTextColor={COLORS.label}
                                        />
                                    </View>
                                    <View style={{marginBottom:15}}>
                                        <TextInput
                                            style={GlobalStyleSheet.formControl}
                                            placeholder='Name on card'
                                            placeholderTextColor={COLORS.label}
                                        />
                                    </View>
                                    <View style={[GlobalStyleSheet.row]}>
                                        <View style={[GlobalStyleSheet.col50]}>
                                            <TextInput
                                                style={GlobalStyleSheet.formControl}
                                                placeholder='Valid Thru(MM/YY)'
                                                placeholderTextColor={COLORS.label}
                                            />
                                        </View>
                                        <View style={[GlobalStyleSheet.col50]}>
                                            <TextInput
                                                style={GlobalStyleSheet.formControl}
                                                placeholder='CVV'
                                                placeholderTextColor={COLORS.label}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </Collapsible>
                        </View>

                        <View style={{borderBottomWidth:1,borderColor:COLORS.borderColor}}>
                            <TouchableOpacity
                                onPress={() => setPaymentOption(paymentOption === 'PhonePe' ? '' : 'PhonePe')}
                                style={[styles.list]}
                            >
                                <Image
                                    style={[styles.listImg,{tintColor:COLORS.title}]}
                                    source={pay}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>PhonePe/ Google Pay/ BHIM UPI</Text>
                                <FeatherIcon color={COLORS.title} name={'chevron-down'} size={22} />
                            </TouchableOpacity>
                            <Collapsible collapsed={paymentOption === "PhonePe" ? false : true}>
                                <View style={{paddingBottom:20}}>
                                    {PhonePeOption.map((data,index) => {
                                        return(
                                            <TouchableOpacity
                                                onPress={() => setPayActive(data.title)}
                                                key={index}
                                                style={[styles.payList,{
                                                    borderBottomColor:COLORS.borderColor,
                                                }, PhonePeOption.length - 1 === index && {
                                                    borderBottomWidth:0,
                                                }]}
                                            >
                                                <View
                                                    style={[styles.listRadio,{
                                                        borderColor:COLORS.text,
                                                    }, payActive === data.title && {
                                                        borderColor:COLORS.primary,
                                                    }]}
                                                >
                                                    {payActive === data.title &&
                                                        <View style={styles.listRadioCircle}/>
                                                    }
                                                </View>
                                                <View
                                                    style={[styles.payMedia,{
                                                        borderColor:COLORS.borderColor,
                                                    }]}
                                                >
                                                    <Image style={styles.payImg} source={data.image}/>
                                                </View>
                                                <Text style={[
                                                    {
                                                        ...FONTS.font,
                                                        color:COLORS.text
                                                    },
                                                    payActive === data.title && {
                                                        ...FONTS.fontBold,
                                                        color:COLORS.title
                                                    }]}>{data.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </Collapsible>
                        </View>

                        <View style={{borderBottomWidth:1,borderColor:COLORS.borderColor}}>
                            <TouchableOpacity
                                onPress={() => setPaymentOption(paymentOption === 'PaytmWallet' ? '' : 'PaytmWallet')}
                                style={[styles.list]}
                            >
                                <Image
                                    style={[styles.listImg,{tintColor:COLORS.title}]}
                                    source={wallet}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>Paytm/ Wallets</Text>
                                <FeatherIcon color={COLORS.title} name={'chevron-down'} size={22} />
                            </TouchableOpacity>
                            <Collapsible collapsed={paymentOption === "PaytmWallet" ? false : true}>
                                <View style={{paddingBottom:20}}>
                                    {PhonePeOption.map((data,index) => {
                                        return(
                                            <TouchableOpacity
                                                onPress={() => setPayActive(data.title)}
                                                key={index}
                                                style={[styles.payList,{
                                                    borderBottomColor:COLORS.borderColor,
                                                }, PhonePeOption.length - 1 === index && {
                                                    borderBottomWidth:0,
                                                }]}
                                            >
                                                <View
                                                    style={[styles.listRadio,{
                                                        borderColor:COLORS.text,
                                                    }, payActive === data.title && {
                                                        borderColor:COLORS.primary,
                                                    }]}
                                                >
                                                    {payActive === data.title &&
                                                        <View style={styles.listRadioCircle}/>
                                                    }
                                                </View>
                                                <View
                                                    style={[styles.payMedia,{
                                                        borderColor:COLORS.borderColor,
                                                    }]}
                                                >
                                                    <Image style={styles.payImg} source={data.image}/>
                                                </View>
                                                <Text style={[
                                                    {
                                                        ...FONTS.font,
                                                        color:COLORS.text
                                                    },
                                                    payActive === data.title && {
                                                        ...FONTS.fontBold,
                                                        color:COLORS.title
                                                    }]}>{data.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </Collapsible>
                        </View>

                        <View style={{borderBottomWidth:1,borderColor:COLORS.borderColor}}>
                            <TouchableOpacity
                                onPress={() => setPaymentOption(paymentOption === 'Netbanking' ? '' : 'Netbanking')}
                                style={[styles.list]}
                            >
                                <Image
                                    style={[styles.listImg,{tintColor:COLORS.title}]}
                                    source={bank}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>Net Banking</Text>
                                <FeatherIcon color={COLORS.title} name={'chevron-down'} size={22} />
                            </TouchableOpacity>
                            <Collapsible collapsed={paymentOption === "Netbanking" ? false : true}>
                                <View style={{paddingBottom:20}}>
                                    {PhonePeOption.map((data,index) => {
                                        return(
                                            <TouchableOpacity
                                                onPress={() => setPayActive(data.title)}
                                                key={index}
                                                style={[styles.payList,{
                                                    borderBottomColor:COLORS.borderColor,
                                                }, PhonePeOption.length - 1 === index && {
                                                    borderBottomWidth:0,
                                                }]}
                                            >
                                                <View
                                                    style={[styles.listRadio,{
                                                        borderColor:COLORS.text,
                                                    }, payActive === data.title && {
                                                        borderColor:COLORS.primary,
                                                    }]}
                                                >
                                                    {payActive === data.title &&
                                                        <View style={styles.listRadioCircle}/>
                                                    }
                                                </View>
                                                <View
                                                    style={[styles.payMedia,{
                                                        borderColor:COLORS.borderColor,
                                                    }]}
                                                >
                                                    <Image style={styles.payImg} source={data.image}/>
                                                </View>
                                                <Text style={[
                                                    {
                                                        ...FONTS.font,
                                                        color:COLORS.text
                                                    },
                                                    payActive === data.title && {
                                                        ...FONTS.fontBold,
                                                        color:COLORS.title
                                                    }]}>{data.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </Collapsible>
                        </View>

                        <View style={{borderBottomWidth:1,borderColor:COLORS.borderColor}}>
                            <TouchableOpacity
                                onPress={() => setPaymentOption(paymentOption === 'EMI' ? '' : 'EMI')}
                                style={[styles.list]}
                            >
                                <Image
                                    style={[styles.listImg,{tintColor:COLORS.title}]}
                                    source={personal}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>EMI/ Pay Later</Text>
                                <FeatherIcon color={COLORS.title} name={'chevron-down'} size={22} />
                            </TouchableOpacity>
                            <Collapsible collapsed={paymentOption === "EMI" ? false : true}>
                                <View style={{paddingBottom:20}}>
                                    {PhonePeOption.map((data,index) => {
                                        return(
                                            <TouchableOpacity
                                                onPress={() => setPayActive(data.title)}
                                                key={index}
                                                style={[styles.payList,{
                                                    borderBottomColor:COLORS.borderColor,
                                                }, PhonePeOption.length - 1 === index && {
                                                    borderBottomWidth:0,
                                                }]}
                                            >
                                                <View
                                                    style={[styles.listRadio,{
                                                        borderColor:COLORS.text,
                                                    }, payActive === data.title && {
                                                        borderColor:COLORS.primary,
                                                    }]}
                                                >
                                                    {payActive === data.title &&
                                                        <View style={styles.listRadioCircle}/>
                                                    }
                                                </View>
                                                <View
                                                    style={[styles.payMedia,{
                                                        borderColor:COLORS.borderColor,
                                                    }]}
                                                >
                                                    <Image style={styles.payImg} source={data.image}/>
                                                </View>
                                                <Text style={[
                                                    {
                                                        ...FONTS.font,
                                                        color:COLORS.text
                                                    },
                                                    payActive === data.title && {
                                                        ...FONTS.fontBold,
                                                        color:COLORS.title
                                                    }]}>{data.title}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </Collapsible>
                        </View>
                        
                        <View style={[GlobalStyleSheet.container]}>
                            <View
                                style={{
                                    paddingHorizontal:15,
                                    paddingVertical:15,
                                    backgroundColor:"#eee",
                                    borderRadius:10,
                                    flexDirection:'row',
                                    alignItems:'center',
                                }}
                            >
                                <Image
                                    style={{height:18,width:18,marginRight:12,tintColor:COLORS.title}}
                                    source={gift}
                                />
                                <Text style={[styles.listTitle,{color:COLORS.title}]}>Have a Gift Card?</Text>
                                <TouchableOpacity>
                                    <Text style={{...FONTS.font,color:COLORS.primary,...FONTS.fontBold}}>APPLY</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[GlobalStyleSheet.container]}>
                            <View
                                style={{
                                    borderBottomWidth:1,
                                    borderBottomColor:COLORS.borderColor,
                                    paddingBottom:10,
                                    marginBottom:10,
                                }}
                            >
                                <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.title}}>Price Details(1 item)</Text>
                            </View>
                            <View style={styles.detailList}>
                                <Text style={{...FONTS.font,color:COLORS.text}}>Total MRP</Text>
                                <Text style={{...FONTS.font,color:COLORS.text}}>1599</Text>
                            </View>
                            <View style={styles.detailList}>
                                <Text style={{...FONTS.font,color:COLORS.text}}>Discount on MRP</Text>
                                <Text style={{...FONTS.font,color:COLORS.success}}>-640</Text>
                            </View>
                            <View style={styles.detailList}>
                                <Text style={{...FONTS.font,color:COLORS.text}}>Coupon Discount</Text>
                                <Text style={{...FONTS.font,color:COLORS.success}}>-200</Text>
                            </View>
                            <View
                                style={{
                                    borderTopWidth:1,
                                    borderTopColor:COLORS.borderColor,
                                    paddingTop:8,
                                    marginTop:10,
                                    flexDirection:'row',
                                    justifyContent:'space-between',
                                }}
                            >
                                <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.title}}>Total Amount</Text>
                                <Text style={{...FONTS.font,...FONTS.fontBold,color:COLORS.title}}>759</Text>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={[GlobalStyleSheet.container,{
                        borderTopWidth:1,
                        borderColor:COLORS.borderColor,
                    }]}>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                            }}
                        >
                            <View style={{width:120}}>
                                <Text style={{...FONTS.h5,color:COLORS.title}}>$759</Text>
                                <TouchableOpacity>
                                    <Text style={{...FONTS.font,color:COLORS.primary,lineHeight:16}}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}>
                                <CustomButton
                                    onPress={() => props.navigation.navigate('DeliveryTracking')}
                                    title={'Pay now'} color={COLORS.primary}/>
                            </View>
                        </View>
                    </View>
                </View>

            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    stepItem : {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    stepIcon : {
        height:30,
        width:30,
        borderRadius:35,
        marginRight:10,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:COLORS.primary2,
    },
    list : {
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:18,
    },
    listImg : {
        height:20,
        width:20,
        resizeMode:'contain',
        marginRight:12,
    },
    listTitle : {
        ...FONTS.font,
        ...FONTS.fontBold,
        flex:1,
    },
    detailList:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:2,
    },
    payList : {
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:15,
        borderBottomWidth:1,
    },
    listRadio : {
        height:15,
        width:15,
        borderRadius:10,
        borderWidth:1,
        marginRight:15,
        alignItems:'center',
        justifyContent:'center',
    },
    listRadioCircle : {
        height:8,
        width:8,
        borderRadius:8,
        backgroundColor:COLORS.primary,
    },
    payImg : {
        height:35,
        width:35,
        borderRadius:35,
    },
    payMedia : {
        borderWidth:1,
        padding:5,
        borderRadius:40,
        marginRight:15,
    }
})

export default Payment;