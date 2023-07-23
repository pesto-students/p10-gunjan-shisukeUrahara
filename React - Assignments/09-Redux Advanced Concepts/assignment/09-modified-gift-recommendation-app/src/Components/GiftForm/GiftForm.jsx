import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setGender,
    setAge,
    addInterest,
    removeInterest,
    fetchRecommendations,
    setMessage,
} from '../../store/reducers/index';
import Interests from '../Interests/Interests';
import Recommendations from '../Recommendations/Recommendations';
import Toaster from '../Toaster/Toaster';
import Loader from '../Loader/Loader';
import './GiftForm.css';

function GiftForm() {
    const dispatch = useDispatch();
    const { gender, age, interests, recommendations, message, status } = useSelector((state) => state.gift);
    const [newInterest, setNewInterest] = useState('');

    const handleGenderChange = (e) => {
        dispatch(setGender(e.target.value));
    };

    const handleAgeChange = (e) => {
        dispatch(setAge(e.target.value));
    };

    const handleNewInterestChange = (e) => {
        setNewInterest(e.target.value);
    };

    const handleInterestRemove = (index) => {
        dispatch(removeInterest(index));
    };

    const handleNewInterestAdd = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();  // Prevent the event from triggering the form submit
            if (newInterest) {
                dispatch(addInterest(newInterest));
                setNewInterest('');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setMessage(null));
        dispatch(fetchRecommendations({ age, gender, interests }));
    };

    return (
        <div className="GiftForm">
            <h1>Gift Recommendation App</h1>
            <form onSubmit={handleSubmit}>
                <select name="gender" value={gender} onChange={handleGenderChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select name="age" value={age} onChange={handleAgeChange}>
                    {[...Array(100)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
                <div>
                    <Interests interests={interests} onRemove={handleInterestRemove} />
                    <input
                        name="newInterest"
                        value={newInterest}
                        onChange={handleNewInterestChange}
                        onKeyPress={handleNewInterestAdd}
                        placeholder="Add interest"
                    />
                </div>
                <button type="submit">Get Recommendations</button>
                {status === 'loading' && <Loader />}
            </form>
            <Toaster message={message} />
            {status === 'succeeded' && <Recommendations recommendations={recommendations} />}
        </div>
    );
}

export default GiftForm;
