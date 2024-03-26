const express = require('express');
const db = require('../firebase');

const addTransportationDetails = async(request, response, next) => {
    const id = request.params.id;
    const docRef = db.collection('users').doc(id);
    const transportationRef = docRef.collection('transportation').doc();
    const data = request.body;
    try{
        await transportationRef.set({
            'vehicle_type': data.vehicle_type,
            'distance': data.distance,
            'frequency': data.frequency,
            'date': data.date,
        });
        response.status(200).send(`Transportation data added successfully for the user ${id}`);
    } catch(error){
        response.status(400).send(error.message);
    }
};

const getAllTransportationDetails = async(request, response, text) => {
    const id = request.params.id;
    const docRef = db.collection('users').doc(id);
    const transportationData = [];
    try{
        const transportationSnapshot = await docRef.collection('transportation').get();
        transportationSnapshot.forEach(transportationDoc => {
            transportationData.push(transportationDoc.data());
        });
        response.status(200).send(transportationData);
    }catch(error){
        response.status(400).send(`Error retrieving all records of transportation for the user ${id}`);
    }
};

const getSingleTransportationRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.transRecId;
    const docRef = db.collection('users').doc(userId);
    try{
        const record_details = await docRef.collection('transportation').doc(recordId).get();
        response.status(200).send(record_details.data());
    } catch(error){
        response.status(400).send(`Error retrieving details of individual transportation record ${recordId}`);
    }
};

// For development purposes: DO NOT USE IN PRODUCTION
const updateTransportationRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.transRecId;
    const data= request.body;
    const docRef = db.collection('users').doc(userId);
    try{
        const record_details = await docRef.collection('transportation').doc(recordId).set(data, {merge: true});
        response.status(200).send(`Record ${recordId} updated successfully!`);
    } catch(error){
        response.status(400).send(`Error updating details of transportation record ${recordId}`);
    }
}

const deleteTransportationRec = async(request, response, next) => {
    const userId = request.params.id;
    const recordId = request.params.transRecId;
    const data= request.body;
    const docRef = db.collection('users').doc(userId);
    try{
        await docRef.collection('transportation').doc(recordId).delete();
        response.status(200).send(`Record ${recordId} deleted successfully!`);
    } catch(error){
        response.status(400).send(`Error deleting details of transportation record ${recordId}`);
    }
}

// End of development related functions

module.exports = {
    addTransportationDetails, getAllTransportationDetails, getSingleTransportationRec, updateTransportationRec, deleteTransportationRec,
}