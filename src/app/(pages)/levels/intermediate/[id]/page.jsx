"use client"
import Intermediate from '@/levels/intermediate/intermediate';
import { useParams } from 'next/navigation';

const IntermediateDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Intermediate id={id} />
        </div>
    );
};

export default IntermediateDetails;