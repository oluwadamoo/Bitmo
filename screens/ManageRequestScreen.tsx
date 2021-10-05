import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  Pressable,
} from "react-native";
import Request from "../components/Request";

const approvedRequests = [
  {
    id: 1,
    status: "Approved",
    date: "December 21, 2021",
    location: "Plot 2B Lekki Lagos",
    appointmentTime: "Monday May, 2021 - 10:45:25AM",
  },
  {
    id: 2,
    status: "Approved",
    date: "December 21, 2021",
    location: "Plot 2B Lekki Lagos",
    appointmentTime: "Monday May, 2021 - 10:45:25AM",
  },
];

const pendingRequests = [
  {
    id: 1,
    status: "Pending",
    date: "December 21, 2021",
    location: "Plot 2B Lekki Lagos",
    appointmentTime: "Monday May, 2021 - 10:45:25AM",
  },
  {
    id: 2,
    status: "Pending",
    date: "December 21, 2021",
    location: "Plot 2B Lekki Lagos",
    appointmentTime: "Monday May, 2021 - 10:45:25AM",
  },
];

const unApprovedRequests = [
  {
    id: 1,
    status: "UnApproved",
    date: "December 21, 2021",
    location: "Plot 2B Lekki Lagos",
    appointmentTime: "Monday May, 2021 - 10:45:25AM",
  },
  {
    id: 2,
    status: "UnApproved",
    date: "December 21, 2021",
    location: "Plot 2B Lekki Lagos",
    appointmentTime: "Monday May, 2021 - 10:45:25AM",
  },
];

const ManageRequestScreen = () => {
  const [openApproved, setOpenApproved] = useState(true);
  const [openPending, setOpenPending] = useState(false);
  const [openUnApproved, setOpenUnApproved] = useState(false);

  const isApproved = () => {
    setOpenApproved(!openApproved);
    setOpenPending(false);
    setOpenUnApproved(false);
  };
  const isPending = () => {
    setOpenApproved(false);
    setOpenPending(!openPending);
    setOpenUnApproved(false);
  };
  const isUnApproved = () => {
    setOpenApproved(false);
    setOpenPending(false);
    setOpenUnApproved(!openUnApproved);
  };
  return (
    <View style={styles.container}>
      {/* Approved  Request */}

      <Pressable style={styles.requestWrapper} onPress={isApproved}>
        <Text style={styles.requestHeader}>Approved Request</Text>
        <View
          style={{
            backgroundColor: "#319df7",
            height: 20,
            width: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            2
          </Text>
        </View>
      </Pressable>

      {openApproved && (
        <View style={{ height: 280 }}>
          <Text style={{ marginLeft: 15, marginTop: 15, color: "#787878" }}>
            Slide to see more
          </Text>
          <FlatList
            data={approvedRequests}
            renderItem={({ item }) => <Request request={item} />}
            horizontal
          />
        </View>
      )}

      {/* Pending  Request */}
      <Pressable style={styles.requestWrapper} onPress={isPending}>
        <Text style={styles.requestHeader}>Pending Request</Text>
        <View
          style={{
            backgroundColor: "#319df7",
            height: 20,
            width: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            2
          </Text>
        </View>
      </Pressable>

      {openPending && (
        <View style={{ height: 280 }}>
          <Text style={{ marginLeft: 15, marginTop: 15, color: "#787878" }}>
            Slide to see more
          </Text>
          <FlatList
            data={pendingRequests}
            horizontal
            renderItem={({ item }) => <Request request={item} />}
          />
        </View>
      )}
      {/* UnApproved  Request */}
      <Pressable style={styles.requestWrapper} onPress={isUnApproved}>
        <Text style={styles.requestHeader}>UnApproved Request</Text>
        <View
          style={{
            backgroundColor: "#319df7",
            height: 20,
            width: 20,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 15 }}>
            2
          </Text>
        </View>
      </Pressable>

      {openUnApproved && (
        <View style={{ height: 280 }}>
          <Text style={{ marginLeft: 15, marginTop: 15, color: "#787878" }}>
            Slide to see more
          </Text>
          <FlatList
            data={unApprovedRequests}
            horizontal
            renderItem={({ item }) => <Request request={item} />}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: 15,
  },
  requestWrapper: {
    backgroundColor: "#e0f1ff",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 2,
    marginVertical: 2,
    alignItems: "center",
  },
  requestHeader: {
    color: "#319df7",
    fontWeight: "bold",
    fontSize: 20,
  },
});
export default ManageRequestScreen;
