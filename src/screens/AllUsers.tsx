import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
//Global State
import { useSelector } from "react-redux";
//Navigation
import { useNavigation } from "@react-navigation/native";
//delte function from userSlice
import { deleteUser } from "../redux/slice/userSlice";
import { useDispatch } from "react-redux";
const AllUsers = () => {
  const navigation: any = useNavigation();
  const users = useSelector((state) => state.users.users);
  // console.log(users);
  //using dispatch for deleteUser method
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-800 ">
      <View
        className="mb-6"
        style={{ marginTop: Platform.OS === "android" ? 45 : 0 }}
      >
        {users.length ? (
          <FlatList
            data={users}
            renderItem={({ item, index }) => (
              <View className="border border-white p-3 my-3 rounded-xl flex-row justify-between w-96 ">
                <View className="w-60 h-auto">
                  <Text className="text-xl text-gray-200 font-semibold mb-4">
                    Name: {item.name}
                  </Text>
                  <Text className="text-xl text-gray-200 font-semibold  mb-4 ">
                    Email: {item.email}
                  </Text>
                  <Text className="text-xl text-gray-200 font-semibold ">
                    Contact: {item.phone}
                  </Text>
                </View>
                <View className="flex-col items-center ">
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("updateUser", {
                        //sending index and item to updateUser Screen, using navigation
                        index,
                        item,
                      });
                    }}
                  >
                    <Text className="text-blue-800 border border-blue-300 bg-white text-lg rounded-xl px-5 mb-5 mt-5 ">
                      Edit
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      dispatch(deleteUser(index));
                    }}
                  >
                    <Text className="text-red-800 border border-red-300  bg-white text-lg rounded-xl px-2 ">
                      Delete
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : (
          <View className="flex items-center justify-center">
            <Text className="text-gray-100 font-semibold text-2xl">
              No user data available...
            </Text>
          </View>
        )}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("addUser")}
        className=" bg-slate-50 w-14 h-14  absolute
        bottom-10 right-8  rounded-3xl "
      >
        <Text className="text-gray-800 text-4xl font-bold self-center m-2">
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AllUsers;
