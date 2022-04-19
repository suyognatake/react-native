import React from "react";
import {
    Text,TouchableOpacity,StyleSheet,View,Image,Linking
} from "react-native";

export default function About() {
    return(
        <View style={styles.aboutConatiner}>
             <Text style={styles.mainHeader}>Suyog Somaji Natake</Text>
             <Text style={styles.paraStyle}>
                 I am full stack developer</Text>
          <View>
              <Image
                style={styles.imgStyle}
                resizeMode="contain"
                source={require("../../assets/logo.jpeg")}
              />
          </View>
        
      <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}>About Me</Text>
          <Text style=
          {[styles.paraStyle,styles.aboutPara]}>
               I am Full stack developer and I have learn c c++ java advance java techonology,also i have android developer recently run react native technology..
              </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Network</Text>
         <View style={styles.menuContainer}>

        <TouchableOpacity
               style={styles.buttonStyle}
               onPress={() =>
                  Linking.openURL()
              }>
          <Image 
            style={styles.iconStyle}
             source={{
                 uri:"https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
             }}
           />
           </TouchableOpacity>

           <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL(
              "https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
            )
          }>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.gg/AN8ThRBXtY")}>
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
         </View>
        </View>
    );
};

const styles = StyleSheet.create({
    aboutConatiner: {
        display:"flex",
        alignItems:"center",
    },
    imgStyle:{
        width:150,
        height:150,
        borderRadius:100,
    },
    mainHeader: {
        fontSize:18,
        color:"#344055",
        textTransform:"uppercase",
        fontWeight:"500",
        marginTop:40,
        marginBottom:10,  
    },
    paraStyle: {
        fontSize:18,
        color:"#7d7d7d",
        paddingBottom:30,
        
    },
    aboutLayout:{
         backgroundColor:"#4c5dab",
         paddingHorizontal:30,
         marginTop:20,
    },
    aboutSubHeader:{
        color:"#fff",
        fontSize:18,
        textTransform:"uppercase",
        fontWeight:"500",
        marginVertical:15,
        alignSelf:"center",
    },
    aboutPara: {
         color:"#fff",
        fontSize:18,
        lineHeight:26,
    },
    menuContainer: {
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    iconStyle: {
        width:"100%",
        height:50,
        aspectRatio:1,
    }
});