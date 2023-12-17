import { useState, useRef } from 'react';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore'

const Home = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const form = useRef();

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    const submitPortfolio = async (e) => {
        e.preventDefault();
        setLoading(true);

        const storageRef = ref(storage, `portfolio/${image.name}`);

        try {
            const snapshot = await uploadBytes(storageRef, image);
            const downloadUrl = await getDownloadURL(snapshot.ref);

            await savePortfolio({
                name,
                description,
                url,
                image: downloadUrl,
            });
        } catch (error) {
            console.error(error);
            await savePortfolio({
                name,
                description,
                url,
                image: null,
            });
        } finally {
            setLoading(false);
        }
    };

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(db, 'portfolio'), portfolio);
            window.location.reload(false);
        } catch (error) {
            alert('Failed to add portfolio');
        }
    };

    return (
        <div className="dashboard">
            <form onSubmit={submitPortfolio} encType="multipart/form-data">
                <p><input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /></p>
                <p><textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /></p>
                <p><input type="text" placeholder="Url" value={url} onChange={(e) => setUrl(e.target.value)} /></p>
                <p><input type="file" onChange={handleFileChange} /></p>
                <button type="submit" disabled={loading}>Submit</button>
                <button onClick={() => auth.signOut()}>Sign out</button>
            </form>
        </div>
    );
};

export default Home;
