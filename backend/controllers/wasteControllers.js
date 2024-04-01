const express = require('express');
const db = require('../firebase');

const addWasteDetails = async(request, response, next) => {
    const id = request.params.id;
    const docRef = db.collection('users').doc(id);
    const wasteRef = docRef.collection('waste').doc();
    const data = request.body;
    try{
        await wasteRef.set({
            'item': data.item,
            'recyclable': data.recyclable,
            'frequency': data.frequency,
            'date': data.date,
        });
        response.status(200).send(`Waste data added successfully for the user ${id}`);
    } catch(error){
        response.status(400).send(error.message);
    }
};

const getAllWasteDetails = async(request, response, text) => {
    const id = request.params.id;
    const docRef = db.collection('users').doc(id);
    const wasteData = [];
    try{
        const wasteSnapshot = await docRef.collection('waste').get();
        wasteSnapshot.forEach(wasteDoc => {
            wasteData.push(wasteDoc.data());
        });
        response.status(200).send(wasteData);
    }catch(error){
        response.status(400).send(`Error retrieving all records of waste for the user ${id}`);
    }
};

const getSingleWasteRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.wasteRecId;
    const docRef = db.collection('users').doc(userId);
    try{
        const record_details = await docRef.collection('waste').doc(recordId).get();
        response.status(200).send(record_details.data());
    } catch(error){
        response.status(400).send(`Error retrieving details of individual waste record ${recordId}`);
    }
};

// For development purposes: DO NOT USE IN PRODUCTION
const updateWasteRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.wasteRecId;
    const data= request.body;
    const docRef = db.collection('users').doc(userId);
    try{
        const record_details = await docRef.collection('waste').doc(recordId).set(data, {merge: true});
        response.status(200).send(`Record ${recordId} updated successfully!`);
    } catch(error){
        response.status(400).send(`Error updating details of waste record ${recordId}`);
    }
}

const deleteWasteRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.wasteRecId;
    const data= request.body;
    const docRef = db.collection('users').doc(userId);
    try{
        await docRef.collection('waste').doc(recordId).delete();
        response.status(200).send(`Record ${recordId} deleted successfully!`);
    } catch(error){
        response.status(400).send(`Error deleting details of waste record ${recordId}`);
    }
}

// End of development related functions

module.exports = {
    addWasteDetails, getAllWasteDetails, getSingleWasteRec, updateWasteRec, deleteWasteRec,
}