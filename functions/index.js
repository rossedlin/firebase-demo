/**
 * The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
 */
const functions = require('firebase-functions');

/**
 * The Firebase Admin SDK to access the Firebase Realtime Database.
 */
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

/**
 * Hello World
 *
 * @type {HttpsFunction}
 */
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Ross's Firebase!");
});

/**
 * Get Message
 *
 * @type {HttpsFunction}
 */
exports.getMessage = functions.https.onRequest(async (request, response) => {

    response.send("Get from Ross's Firebase!");

    // const database = admin.database(); // Get a reference to the database service
    // var userId = admin.auth().currentUser.uid;


    // return admin.database().ref('/messages/LfL4w1ULJo359PFOzcrf/').once('value').then(function (snapshot) {
        // var username = (snapshot.val() && snapshot.val().message) || 'Anonymous';
        //
        //
        // response.send("Message from Firebase: " + username);
    // });

    // // Grab the text parameter.
    // const original = req.query.text;
    //
    // // Push the new message into the Realtime Database using the Firebase Admin SDK.
    // const snapshot = await admin.database().ref('/messages').push({original: original});
    //
    // // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    // res.redirect(303, snapshot.ref.toString());
});


/**
 * Add Message
 *
 * @type {HttpsFunction}
 */
exports.addMessage = functions.https.onRequest(async (request, response) => {

    response.send("Add from Ross's Firebase!");

    admin.database().ref('messages').set({
        message: 'Hey!!!',
    });

    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    // const snapshot = await admin.database().ref('/messages').push({original: original});

    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    // res.redirect(303, snapshot.ref.toString());
});