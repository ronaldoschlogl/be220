import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

export const treinar = functions.firestore
.document("/usuarios/{idUsuario}/treinos")
.onCreate(async (snapshot, context) => {
    try {
        console.log("snapshot", snapshot.data);
        console.log("context", context);

        await admin.firestore()
        .collection("usuarios")
        .doc(context.params.idUsuario)
        .update({numTreinos: admin.firestore.FieldValue.increment})
    } catch (error) {
        
    }
  });
