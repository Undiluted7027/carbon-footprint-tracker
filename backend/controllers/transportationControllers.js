const express = require("express");
const firebaseConfig = require("../firebase");
const { serverTimestamp } = require("firebase/firestore");
const calculators = require("../metrics/transportation/TransportationCalculations");
const { firestore } = require("firebase-admin");
const converters = require("../metrics/transportation/conversionVars");

const addTransportationDetails = async (request, response, next) => {
  const userId = request.params.id; // Assuming this is the ID of the user
  const userDataRef = firebaseConfig.db.collection("users").doc(userId);
  const transportationRef = userDataRef.collection("Transportation");

  try {
    // Get the last added record in the transportation subcollection
    const lastTransportationSnapshot = await transportationRef
      .orderBy("updatedAt", "desc")
      .limit(1)
      .get();

    // Check if there are any existing records
    if (lastTransportationSnapshot.empty) {
      // If no existing records, create a new one
      console.log("record is empty");
      const newTransportationRef = transportationRef.doc();
      // const created_at_timestamp = { , updatedAt: firestore.Timestamp.now() };
      const tt = firestore.Timestamp.now();
      const dat = {
        createdAt: tt,
        ...request.body,
        updatedAt: tt,
      };

      // docRef.update({ updated_at: updated_at_timestamp })
      await newTransportationRef.set(dat);
      response
        .status(200)
        .send(`Transportation data added successfully for the user ${userId}`);
    } else {
      // If existing records, use the ID of the last record
      const lastTransportationId = lastTransportationSnapshot.docs[0].id;
      const existingTransportationRef =
        transportationRef.doc(lastTransportationId);
      const tt = firestore.Timestamp.now();
      const dat = {
        ...request.body,
        updatedAt: tt,
      };
      await existingTransportationRef.update(dat, { merge: true });
      response
        .status(200)
        .send(`Transportation data added successfully for the user ${userId}`);
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const getAllTransportationDetails = async (request, response, text) => {
  const id = request.params.id;
  const docRef = db.collection("users").doc(id);
  const transportationData = [];
  try {
    const transportationSnapshot = await docRef
      .collection("transportation")
      .get();
    transportationSnapshot.forEach((transportationDoc) => {
      transportationData.push(transportationDoc.data());
    });
    response.status(200).send(transportationData);
  } catch (error) {
    response
      .status(400)
      .send(
        `Error retrieving all records of transportation for the user ${id}`
      );
  }
};

const getSingleTransportationRec = async (
  request,
  response,
  next,
  userId,
  transRecId
) => {
  const docRef = db.collection("users").doc(userId);
  try {
    const record_details = await docRef
      .collection("transportation")
      .doc(recordId)
      .get();
    response.status(200).send(record_details.data());
    return record_details.data();
  } catch (error) {
    response
      .status(400)
      .send(
        `Error retrieving details of individual transportation record ${recordId}`
      );
  }
};

const calculateUserCFDate = async (request, response, next) => {
  calculators.calculateCFForDate();
  const userId = request.params.id; // Assuming this is the ID of the user
  const userDataRef = firebaseConfig.db.collection("users").doc(userId);
  const transportationRef = userDataRef.collection("Transportation");

  try {
    // Get the last added record in the transportation subcollection
    const lastTransportationSnapshot = await transportationRef
      .orderBy("updatedAt", "desc")
      .limit(1)
      .get();

    // Check if there are any existing records
    if (!lastTransportationSnapshot.empty) {
      // If no existing records, create a new one
      const lastTransportationId = lastTransportationSnapshot.docs[0].id;
      const record_details = await transportationRef.doc(lastTransportationId).get();
      // console.log(record_details.data());
      // console.log(record_details);
      const val = await calculators.calculateCFForDate(record_details.data());
      const obj = {
        "trees": converters.convertToTrees(val),
        "gas": converters.convertToGasoline(val),
        "cars": converters.convertToCars(val),
      }
      console.log(
        `Number of trees that might have been cut: ${converters.convertToTrees(
          val
        )}`
      );
      console.log(
        `Gallons of gas that might have been burnt: ${converters.convertToGasoline(
          val
        )}`
      );
      console.log(
        `Number of cars that have been added: ${converters.convertToCars(val)}`
      );
      response.status(200).send(obj);
    }
  } catch (error) {
    response.status(400).send(error.message);
  }
};

// For development purposes: DO NOT USE IN PRODUCTION
const updateTransportationRec = async (request, response, next) => {
  const userId = request.params.id;
  const recordId = request.params.transRecId;
  const data = request.body;
  const docRef = db.collection("users").doc(userId);
  const updated_at_timestamp = { createdAt: firestore.Timestamp.now() };

  const dat = { ...request.body, ...updated_at_timestamp };
  try {
    const record_details = await docRef
      .collection("transportation")
      .doc(recordId)
      .set(dat, { merge: true });
    response.status(200).send(`Record ${recordId} updated successfully!`);
  } catch (error) {
    response
      .status(400)
      .send(`Error updating details of transportation record ${recordId}`);
  }
};

const deleteTransportationRec = async (request, response, next) => {
  const userId = request.params.id;
  const recordId = request.params.transRecId;
  const data = request.body;
  const docRef = db.collection("users").doc(userId);
  try {
    await docRef.collection("transportation").doc(recordId).delete();
    response.status(200).send(`Record ${recordId} deleted successfully!`);
  } catch (error) {
    response
      .status(400)
      .send(`Error deleting details of transportation record ${recordId}`);
  }
};

// End of development related functions

module.exports = {
  addTransportationDetails,
  getAllTransportationDetails,
  calculateUserCFDate,
  updateTransportationRec,
  deleteTransportationRec,
};
