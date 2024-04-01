const express = require('express');
const db = require('../firebase');

const addFoodDetails = async(request, response, next) => {
    const id = request.params.id;
    const docRef = db.collection('users').doc(id);
    const foodRef = docRef.collection('food').doc();
    const data = request.body;
    try{
        await foodRef.set({
            'food_type': data.food_type,
            'quantity': data.quantity,
            'frequency': data.frequency,
            'date': data.date,
        });
        response.status(200).send(`Food data added successfully for the user ${id}`);
    } catch(error){
        response.status(400).send(error.message);
    }
};

const getAllFoodDetails = async(request, response, text) => {
    const id = request.params.id;
    const docRef = db.collection('users').doc(id);
    const foodData = [];
    try{
        const foodSnapshot = await docRef.collection('food').get();
        foodSnapshot.forEach(foodDoc => {
            foodData.push(foodDoc.data());
        });
        response.status(200).send(foodData);
    }catch(error){
        response.status(400).send(`Error retrieving all records of food for the user ${id}`);
    }
};

const getSingleFoodRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.foodRecId;
    const docRef = db.collection('users').doc(userId);
    try{
        const record_details = await docRef.collection('food').doc(recordId).get();
        response.status(200).send(record_details.data());
    } catch(error){
        response.status(400).send(`Error retrieving details of individual food record ${recordId}`);
    }
};

// For development purposes: DO NOT USE IN PRODUCTION
const updateFoodRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.foodRecId;
    const data= request.body;
    const docRef = db.collection('users').doc(userId);
    try{
        const record_details = await docRef.collection('food').doc(recordId).set(data, {merge: true});
        response.status(200).send(`Record ${recordId} updated successfully!`);
    } catch(error){
        response.status(400).send(`Error updating details of food record ${recordId}`);
    }
}

const deleteFoodRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.foodRecId;
    const data= request.body;
    const docRef = db.collection('users').doc(userId);
    try{
        await docRef.collection('food').doc(recordId).delete();
        response.status(200).send(`Record ${recordId} deleted successfully!`);
    } catch(error){
        response.status(400).send(`Error deleting details of food record ${recordId}`);
    }
}

// End of development related functions

module.exports = {
    addFoodDetails, getAllFoodDetails, getSingleFoodRec, updateFoodRec, deleteFoodRec,
}