const express = require("express");
const firebaseConfig = require("../firebase");
// const User = require('../models/userModel');

const createUser = async (request, response, next) => {
  try {
    const { firstName, lastName, email, dob, location } = request.body;
    const userObjRef = firebaseConfig.db
      .collection("users")
      .doc(request.user.uid);

    await userObjRef.set({
      firstName,
      lastName,
      email,
      dob,
      location,
    });

    // Create collections and await their creation
    const transportationRef = await userObjRef
      .collection("Transportation")
      .doc()
      .set({});
    const foodRef = await userObjRef.collection("Food").doc().set({});
    const wasteRef = await userObjRef.collection("Waste").doc().set({});

    response.status(200).send("User created successfully!");
  } catch (error) {
    console.error(error.message);
    response.status(500).send("Failed to create user.");
  }
};

const getAllUsers = async (request, response, next) => {
  try {
    const usersSnapshot = await db.collection("users").get();
    const usersData = [];

    usersSnapshot.forEach((userDoc) => {
      usersData.push(userDoc.data());
    });

    response.status(200).send(usersData);
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const getUserById = async (request, response, next) => {
  const requested_id = request.params.id;
  try {
    const user_details = await db.collection("users").doc(requested_id).get();
    response.status(200).send(user_details.data());
  } catch (error) {
    response.status(404).send("User not found!");
  }
};

const updateUser = async (request, response, next) => {
  const id = request.params.id;
  const data = request.body;
  try {
    const update_details = await db
      .collection("users")
      .doc(id)
      .set(data, { merge: true });
    response.status(200).send("User details updated successfully!");
  } catch (error) {
    response.status(400).send(error.message);
  }
};

const deleteUser = async (request, response, next) => {
  const id = request.params.id;
  try {
    await db.collection("users").doc(id).delete();
    response.status(200).send("User deleted successfully!");
  } catch (error) {
    response.status(400).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
