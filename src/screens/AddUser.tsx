import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice/userSlice";
import { useNavigation } from "@react-navigation/native";
//Validation
import { Formik } from "formik";
//Schema
import { object, string, number, date, InferType } from "yup";

const AddUser = () => {
  //validation
  const userSchema = object({
    name: string().min(3).required("please enter your name"),
    email: string().email("Invalid email").required("please enter valid email"),
    phone: number().min(10).required("please enter your phone number"),
  });
  //using dispatch for addUser method
  const dispatch = useDispatch();
  // for navigation
  const navigation = useNavigation();
  //input fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-800">
      <Formik
        className="w-full flex-col items-center justify-center"
        initialValues={{ email: "", name: "", phone: "" }}
        onSubmit={(values) => {
          // console.log(values);
          dispatch(addUser({ name, email, phone }));
          navigation.navigate("allUsers");
        }}
        validationSchema={userSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View className="w-full flex-col items-center justify-center">
            {/* Name */}
            <TextInput
              placeholder="Enter your name"
              // value={name}
              // onChangeText={setName}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              value={values.name}
              placeholderTextColor={"#9AA6B2"}
              keyboardType="default"
              className="p-2 bg-gray-700 text-gray-100 rounded-lg"
              style={styles.inputStyle}
              maxLength={70}
            />
            {setName(values.name)}
            {errors.name && (
              <Text className="text-red-200 ml-2 w-96">{errors.name}</Text>
            )}
            {/* Email */}
            <TextInput
              placeholder="Enter your email"
              // value={email}
              // onChangeText={setEmail}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholderTextColor={"#9AA6B2"}
              keyboardType="email-address"
              className="p-2 bg-gray-700 text-gray-100 rounded-lg mt-4"
              style={styles.inputStyle}
              maxLength={50}
            />
            {setEmail(values.email)}
            {errors.email && (
              <Text className="text-red-200 ml-2 w-96">{errors.email}</Text>
            )}

            <TextInput
              placeholder="Enter your phone number"
              // value={phone}
              // onChangeText={setPhone}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
              placeholderTextColor={"#9AA6B2"}
              keyboardType="phone-pad"
              className="p-2 bg-gray-700 text-gray-100 rounded-lg mt-4"
              style={styles.inputStyle}
              maxLength={10}
            />

            {errors.phone && (
              <Text className="text-red-200 ml-2 w-96">{errors.phone}</Text>
            )}
            {setPhone(values.phone)}
            <TouchableOpacity
              onPress={() => handleSubmit()}
              className="bg-gray-700 w-50 h-14 p-2 mt-8 rounded-2xl items-center justify-center"
            >
              <Text className="text-gray-200 font-semibold text-lg self-center m-2">
                Add User
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddUser;
const styles = StyleSheet.create({
  inputStyle: {
    width: "90%",
    height: 50,
  },
});
