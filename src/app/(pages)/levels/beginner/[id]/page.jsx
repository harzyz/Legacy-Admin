"use client"
import Beginners from '@/levels/beginners/beginners';
import { useParams } from 'next/navigation';

const BeginnerDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Beginners id={id} />
        </div>
    );
};

export default BeginnerDetails;