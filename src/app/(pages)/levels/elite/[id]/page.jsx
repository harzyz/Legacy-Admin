"use client"
import Elite from '@/levels/elite/elite';
import { useParams } from 'next/navigation';

const EliteDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Elite id={id} />
        </div>
    );
};

export default EliteDetails;