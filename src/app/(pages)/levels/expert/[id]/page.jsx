"use client"
import Experts from '@/levels/experts/experts';
import { useParams } from 'next/navigation';

const ExpertDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Experts id={id} />
        </div>
    );
};

export default ExpertDetails;