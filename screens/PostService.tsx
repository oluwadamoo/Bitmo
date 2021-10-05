import React, { useState } from "react";
import { View, Text, Pressable, Dimensions, Platform } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
const PostService = () => {
  const [date, setDate] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState();
  const [mode, setMode] = useState("");
  const [show, setShow] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);
  };

  const showMode = (currentMode: string) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    setMode("time");
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ padding: 10 }}>
        <View
          style={{
            marginVertical: 10,
            elevation: 2,
            backgroundColor: "#fff",
            height: 40,
            // alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCategory(itemValue)
            }
          >
            <Picker.Item
              label="Choose Service Category"
              value=""
              enabled={false}
            />
            <Picker.Item label="Category 1" value="cat1" />
            <Picker.Item label="Category 2" value="cat2" />
          </Picker>
        </View>
        <TextInput
          style={{
            height: 60,
            elevation: 2,
            marginVertical: 10,
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
          placeholder="Describe the nature of your service"
        />

        <Text
          style={{ fontSize: 20, fontWeight: "700", color: "rgb(78, 78, 78)" }}
        >
          Schedule appointment time
        </Text>

        <View
          style={{
            marginTop: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 5,
                color: "rgb(78, 78, 78)",
                fontWeight: "700",
              }}
            >
              Schedule Time
            </Text>
            <Pressable
              onPress={showTimepicker}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  width: Dimensions.get("screen").width / 2.4,
                  elevation: 2,
                  height: 30,
                  backgroundColor: "rgba(255, 255, 255, 0.274)",
                  paddingHorizontal: 10,
                  alignItems: "center",
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Text style={{ color: "#808080", fontFamily: "monospace" }}>
                {date.getHours() <= 9
                  ? `0${date
                      .getHours()
                      .toString()}-${date
                      .getMinutes()
                      .toString()}-${date.getSeconds().toString()} `
                  : `${date
                      .getHours()
                      .toString()}-${date
                      .getMinutes()
                      .toString()}-${date.getSeconds().toString()} `}
              </Text>
              <AntDesign name="clockcircleo" size={10} color="#808080" />
            </Pressable>
          </View>

          <View>
            <Text
              style={{
                fontSize: 15,
                marginBottom: 5,
                color: "rgb(78, 78, 78)",
                fontWeight: "700",
              }}
            >
              Schedule Date
            </Text>
            <Pressable
              onPress={showDatepicker}
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  width: Dimensions.get("screen").width / 2.4,
                  elevation: 2,
                  height: 30,
                  backgroundColor: "rgba(255, 255, 255, 0.274)",
                  paddingHorizontal: 10,
                  alignItems: "center",
                  borderRadius: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                },
              ]}
            >
              <Text style={{ color: "#808080", fontFamily: "monospace" }}>
                {date.toDateString()}
              </Text>
              <AntDesign name="calendar" size={10} color="black" />
            </Pressable>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
          {/* <View>
            <Text>Schedule Date</Text>
           
            <TextInput
              style={{
                height: 30,
                width: Dimensions.get("screen").width / 2.5,
                elevation: 2,
                marginVertical: 10,
                borderRadius: 10,
                paddingHorizontal: 10,
              }}
              value={date.toDateString()}
              onFocus={showDatepicker}
            />
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={onChange}
              />
            )}
          </View>
         */}
        </View>

        <View style={{ marginTop: 13 }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 5,
              color: "rgb(78, 78, 78)",
              fontWeight: "700",
            }}
          >
            Location
          </Text>
          <TextInput
            style={{
              height: 30,

              elevation: 2,
              marginVertical: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}
            placeholder="Enter your location (Optional)"
          />
        </View>
        <Pressable
          style={({ pressed }) => [
            {
              opacity: pressed ? 0.5 : 1,
              alignSelf: "flex-end",
              height: 40,
              width: 80,
              backgroundColor: "#3662a3",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
            },
          ]}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default PostService;
