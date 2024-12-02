import { collection, doc, getCountFromServer, getDoc, getDocs, orderBy, query, setDoc, Timestamp, where } from "firebase/firestore";
import { firestore } from "@components/firebase.config";


export const addRsvpRecord = async (params: any) => {
    const rsvpRef = doc(firestore, "rsvp", params.id); // Specify the ID here
    await setDoc(rsvpRef, {
        id: params.id,
        name: params.name,
        kehadiran: params.kehadiran,
        jumlahKehadiran: parseInt(params.jumlah_kehadiran), // Fixed parseInt issue
        createdAt: Timestamp.now(),
    });
};

export const getRsvpRecord = async (id: string) => {
    const rsvpRef = doc(firestore, "rsvp", id);
    const rsvpSnap = await getDoc(rsvpRef);
    if (rsvpSnap.exists()) {
        return rsvpSnap.data();
    } else {
        return null;
    }
}

export const addUcapanRecord = async (params: any) => {
    const rsvpRef = doc(firestore, "ucapan", params.id); // Specify the ID here
    await setDoc(rsvpRef, {
        id: params.id,
        name: params.name,
        ucapan: params.ucapan,
        createdAt: Timestamp.now(),
    });
}

export const getUcapanById = async (id: string) => {
    const ucapanRef = doc(firestore, "ucapan", id);
    const ucapanSnap = await getDoc(ucapanRef);
    if (ucapanSnap.exists()) {
        return ucapanSnap.data();
    } else {
        return null;
    }
}

// Mendapatkan ucapan dengan pagination
export const getUcapanRecords = async () => {
    const ucapanRef = collection(firestore, "ucapan");

    // Mengambil jumlah total item
    const totalItems = await getCountFromServer(ucapanRef);
    const totalItemsCount = totalItems.data().count;

    // Buat query tanpa pagination
    const ucapanQuery = query(ucapanRef, orderBy("createdAt", "desc"));
    const ucapanSnap = await getDocs(ucapanQuery);

    const ucapanList: any = [];

    if (!ucapanSnap.empty) {
        ucapanSnap.forEach((doc) => {
            ucapanList.push(doc.data());
        });
    }

    return ucapanList;
};

export const getGifts = async () => {
    let gifts: any = [];
    const giftDocs = await getDocs(
        query(collection(firestore, "gift"), orderBy("order", "asc")),
    );

    giftDocs.forEach((doc) => {
        gifts.push(doc.data());
    });
    return gifts;
};

export const getStory = async () => {
    let storys: any = [];
    const storyDocs = await getDocs(
        query(
            collection(firestore, "story"),
            where("active", "==", true),
            orderBy("order", "asc"),
        ),
    );

    storyDocs.forEach((doc) => {
        storys.push(doc.data());
    });
    return storys;
}
